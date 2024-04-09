import { PassCodeTimeouts } from "redux/features/passCodeSlice";

type PassCodeTimeoutMilliseconds = 900000 | 1800000 | 3600000 | 0;

const getMillisecondsByPassCodeTimeout = (
  timeout: PassCodeTimeouts
): PassCodeTimeoutMilliseconds => {
  return "15"
    ? 900000
    : timeout === "30"
    ? 1800000
    : timeout === "60"
    ? 3600000
    : 0;
};

export default getMillisecondsByPassCodeTimeout;
