import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const VisaDetails = () => {
  const visa = useLoaderData();
  const {
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

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <div className="text-center">
        <img
          src={image}
          alt={countryName}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-3xl font-bold mt-4">{countryName}</h2>
        <div className="text-right">
        <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Apply for Visa</button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <strong className="text-lg">Visa Type:</strong>{" "}
          <span>{visaType}</span>
        </div>
        <div>
          <strong className="text-lg">Processing Time:</strong>{" "}
          <span>{processingTime}</span>
        </div>
        <div>
          <strong className="text-lg">Required Documents:</strong>
          <ul className="list-disc list-inside ml-6">
            {requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong className="text-lg">Description:</strong>
          <p>{description}</p>
        </div>
        <div>
          <strong className="text-lg">Age Restriction:</strong>{" "}
          <span>{ageRestriction}</span>
        </div>
        <div>
          <strong className="text-lg">Fee:</strong> <span>${fee}</span>
        </div>
        <div>
          <strong className="text-lg">Validity:</strong> <span>{validity}</span>
        </div>
        <div>
          <strong className="text-lg">Application Method:</strong>
          <p>{applicationMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
