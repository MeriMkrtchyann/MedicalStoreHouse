import * as React from 'react';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import Stack from '@mui/material/Stack';
import removeBasket from '../../services/basket/firebaseDeleteBasket';
import firebaseUpdateOrders from '../../services/basket/firebaseUpdateOrders';

export default function ConfirmByeProduct({open, setOpen, quantity, sum, productImage, setSum, setBasket, activeUser, basket}) {
    
    const closeModal = () => {
        setOpen(false)
    }
    const confirmOrder = async () => {
        Object.keys(basket).map((id) => basket[id].ordered = false)
        await firebaseUpdateOrders(activeUser , basket)
        setSum(0)
        localStorage.setItem("basketSum", JSON.stringify({sum : 0}));
        setBasket({})
        localStorage.setItem("basket", JSON.stringify(null));
        setOpen(false)
        await removeBasket(activeUser)
    }

    return (
        <div>
            <Modal
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                open={open}
                slots={{ backdrop: StyledBackdrop }}
                keepMounted
            >
            <ModalContent sx={{ width: 400 }}>
            <div className="closeByeModal" onClick={() => closeModal()}>
                <p lassName="deleteButton" style={{textAlign: "end" , fontSize: 25, cursor: "pointer"}}>&times;</p>
            </div>
                <h2 id="keep-mounted-modal-title" className="modal-title" style={{textAlign: 'center' }}>
                    Please confirm your order
                </h2>
                <p id="keep-mounted-modal-description" className="modal-description">
                {quantity} product for the sum of <span style={{ fontWeight: "bold" }}>{sum} դր</span> 
                </p>
                <div className="allProductImages" style={{ display: "flex", height: "100px", padding: 10 }}>
                {productImage &&
                    productImage.map((image, index) => (
                    <div
                        key={index}
                        className="productPicture"
                        style={{
                        width: "50px",
                        height: "70px",
                        marginRight: "10px",
                        background: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        }}
                    ></div>
                    ))}
                </div>
                <Stack spacing={2} direction="row" style={{display:"flex" , alignItems: "center" ,justifyContent: "center"}}>
                    <Button onClick={() => confirmOrder()}>
                        Confirm Order
                    </Button>
                </Stack>
            </ModalContent>
            </Modal>
        </div>
    );
}

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
);

const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ 'base-Backdrop-open': open }, className)}
        ref={ref}
        {...other}
      />
    );
  });
  
  Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
  };

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
  };

const Modal = styled(BaseModal)(`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &.base-Modal-hidden {
    visibility: hidden;
  }
`);

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);

