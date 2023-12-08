import bcrypt from "bcryptjs";
import { PassCode, PassCodeTimeout } from "redux/features/passCodeSlice";

class PassCodeStore {
  public static storage = localStorage;

  private static set(value: PassCode) {
    this.storage.setItem("passCode", JSON.stringify(value));
  }

  public static get(): PassCode {
    if (!this.storage.getItem("passCode"))
      this.set({ passCodeTimeout: "none" });
    return JSON.parse(this.storage.getItem("passCode") as string);
  }

  public static setValue(passCode: PassCode, value?: string): PassCode {
    passCode.isPassed = undefined;

    if (value) {
      let salt = bcrypt.genSaltSync(); // default salt value = 10
      let hashedValue = bcrypt.hashSync(value, salt);
      passCode.value = hashedValue;
    } else passCode.value = undefined;

    this.set(passCode);
    return passCode;
  }

  public static lock(passCode: PassCode): PassCode {
    if (passCode.value) passCode.isPassed = false;
    return passCode;
  }

  public static unlock(passCode: PassCode): PassCode {    
    passCode.isPassed = true;
    return passCode;
  }

  public static replace(passCode: PassCode, newPassCode: PassCode): PassCode {
    passCode = newPassCode;
    passCode.isPassed = undefined;
    this.set(passCode);
    return newPassCode;
  }

  public static setPassCodeTimeout(
    passCode: PassCode,
    timeout: PassCodeTimeout
  ): PassCode {
    passCode.passCodeTimeout = timeout;
    this.set(passCode);
    return passCode;
  }
}

export default PassCodeStore;
