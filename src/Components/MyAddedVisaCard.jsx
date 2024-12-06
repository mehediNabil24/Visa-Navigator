import { getAuth } from 'firebase/auth';
import React from 'react';
import Swal from 'sweetalert2';

const MyAddedVisaCard = ({visa}) => {
    const {
        _id,
        image,
        countryName,
        visaType,
        processingTime,
        requiredDocuments,
        description,
        ageRestriction,
        fee,
        validity,
        applicationMethod,
      } = visa;

      const handleSubmit =e=>{
        e.preventDefault();

        const auth =getAuth()
        const user= auth?.currentUser

        const createdBy = user.email
        


        const form = e.target;
        const image = form.image.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const requiredDocuments = Array.from(form.requiredDocuments)
            .filter(doc => doc.checked)
            .map(doc => doc.value);
        const description = form.description.value;
        const ageRestriction = form.ageRestriction.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;

    
      

      const updateVisa = {
        image,
        countryName,
        visaType,
        processingTime,
        requiredDocuments,
        description,
        ageRestriction,
        fee,
        validity,
        applicationMethod
      }
      console.log(updateVisa)
      fetch(`http://localhost:5000/visa/email/${createdBy}`,{
        method:'PUT',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(updateVisa)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log('data',data)
        if(data.matchedCount>0){
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'Update',
                confirmButtonText: 'Cool'
              })
        }
      })


      const modal = document.getElementById("my_modal_5");
      modal.close();
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Visa pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {countryName}
            <div className="badge badge-neutral">{visaType}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={() => document.getElementById("my_modal_5").showModal() } className='btn btn-accent' >Update</button>
            <button className='btn btn-warning'>Delete</button>
          </div>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
            onClick={(e) => {
                const dialog = document.getElementById('my_modal_5');
                if (e.target === dialog) {
                  dialog.close(); // Close the modal if clicking outside of the modal content
                }
              }}
          >
            <div className="modal-box">
              <div className="modal-action">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Country Image and Name */}
                <div className="md:flex justify-between gap-10">
                    <div className="w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="image"
                            placeholder="Country Image URL"
                            defaultValue={image}
                        />
                    </div>
                    <div className="w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="countryName"
                            placeholder="Country Name"
                            defaultValue={countryName}
                        />
                    </div>
                </div>

                {/* Visa Type and Processing Time */}
                <div className="md:flex justify-between gap-10">
                    <div className="w-1/2">
                        <select
                            className="input input-bordered join-item w-full"
                            name="visaType"
                            defaultValue={visaType}
                        >
                            <option value="Tourist visa">Tourist visa</option>
                            <option value="Student visa">Student visa</option>
                            <option value="Official visa">Official visa</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="processingTime"
                            defaultValue={processingTime}
                            placeholder="Processing Time"
                        />
                    </div>
                </div>

                {/* Required Documents */}
                <div>
                    <p className="font-bold">Required Documents:</p>
                    <div className="flex gap-4">
                        <label>
                            <input
                                type="checkbox"
                                name="requiredDocuments"
                                defaultValue={requiredDocuments}
                                value="Valid passport"
                            />
                            Valid passport
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="requiredDocuments"
                                defaultValue={requiredDocuments}
                                value="Visa application form"
                            />
                            Visa application form
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="requiredDocuments"
                                defaultValue={requiredDocuments}
                                value="Recent passport-sized photograph"
                            />
                            Recent passport-sized photograph
                        </label>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <textarea
                        className="textarea textarea-bordered join-item w-full"
                        name="description"
                        defaultValue={description}
                        placeholder="Description"
                    />
                </div>

                {/* Age Restriction and Fee */}
                <div className="md:flex justify-between gap-10">
                    <div className="w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="ageRestriction"
                            defaultValue={ageRestriction}
                            type="number"
                            placeholder="Age Restriction"
                        />
                    </div>
                    <div className="w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="fee"
                            defaultValue={fee}
                            type="number"
                            placeholder="Fee"
                        />
                    </div>
                </div>

                {/* Validity and Application Method */}
                <div className="md:flex justify-between gap-10">
                    <div className="w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="validity"
                            defaultValue={validity}
                            placeholder="Validity"
                        />
                    </div>
                    <div className="w-1/2">
                        <input
                            className="input input-bordered join-item w-full"
                            name="applicationMethod"
                            defaultValue={applicationMethod}
                            placeholder="Application Method"
                        />
                    </div>
                </div>

                <input className="btn btn-block" type="submit" value="Update" />
            </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    );
};

export default MyAddedVisaCard;