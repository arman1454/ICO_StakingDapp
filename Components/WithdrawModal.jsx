import React, { useState } from "react";

import { IoMdClose } from "./ReactICON"
import PopUpInputField from "./Admin/RegularComp/PopUpInputField"
import PopUpButton from "./Admin/RegularComp/PopUpButton"


const WithdrawModal = ({withdraw,withdrawPoolID,address,setLoader,claimReward}) => {
  const [amount, setAmount] = useState()

  const CALLING_FUNCTION = async (withdrawPoolID, amount, address) => {
    setLoader(true);
    const receipt = await withdraw(withdrawPoolID, amount, address)

    if (receipt) {
      setLoader(false);
      window.location.reload()
    }

    setLoader(false)
  }
  const CALLING_CLAIM = async (withdrawPoolID) => {
    setLoader(true);
    const receipt = await claimReward(withdrawPoolID, amount, address)

    if (receipt) {
      setLoader(false);
      window.location.reload()
    }

    setLoader(false)
  }
  return( 
    <div className="modal modal--auto fade" id="modal-node" tabIndex={-1} aria-labelledby="modal-node" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal__content">
            <button className="modal__close" type="button" data-bs-dismiss="modal" aria-label="close">
              <i className="ti ti-x">
                <IoMdClose />
              </i>
            </button>

            <h4 className="modal__title">Withdraw Token</h4>
            <p className="modal__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quos quam ea repudiandae eligendi expedita veritatis voluptatibus iste cum, culpa explicabo quae dolores nemo? Mollitia repellendus sequi numquam exercitationem. Ipsum?
            </p>
            <div className="modal__form">
              <PopUpInputField title={`Amount`}
                placeholder="Amount" handleChange={(e) => setAmount(e.target.value)}
              />

              <PopUpButton title={"Withdraw"} handleClick={() => CALLING_FUNCTION(withdrawPoolID, amount, address)} />
              <PopUpButton title={"Claim Reward"} handleClick={() => CALLING_CLAIM(withdrawPoolID, amount, address)} />
              </div>
            </div>
            </div>
            </div>
      </div>
  )
};

export default WithdrawModal;
