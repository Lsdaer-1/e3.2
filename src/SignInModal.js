import React from 'react';
import Modal from 'react-modal';
import './SignInModal.css';

Modal.setAppElement('#root'); // 确保在应用根元素中正确挂载弹窗

const SignInModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Sign In Modal">
      <div className="sign-in-container">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label>
              Email:
              <input type="text" name="email" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <a href="#" className="forgot-password">Forget password</a>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <a href="#" className="create-account">Click here if you don’t have an account</a>
        
      </div>
    </Modal>
  );
}
/*<button onClick={onRequestClose} className="close-button">Close</button>*/
export default SignInModal;

