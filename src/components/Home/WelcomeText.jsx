import { capitalizeFirstLetter, decodeJWT } from "../../utils/utils";

const WelcomeText = () => {
  const decodedPayload = decodeJWT();
  return (
    <>
      {" "}
      {decodedPayload && (
        <div>
          <p>
            {" "}
            Welcome,{" "}
            <span className="text-primary font-bold text-xl">
              {capitalizeFirstLetter(decodedPayload?.user_details?.first_name)}!
            </span>{" "}
            Happy to see you!
          </p>
        </div>
      )}
    </>
  );
};
export default WelcomeText;
