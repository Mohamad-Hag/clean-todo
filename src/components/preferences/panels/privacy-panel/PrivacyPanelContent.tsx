import AutomaticLockTime from "./AutomaticLockTime";
import DisablePassCode from "./DisablePassCode";
import PassCodeSetterForm from "./PassCodeSetterForm";

export default function PrivacyPanelContent() {
  return (
    <div className="flex flex-col gap-10">
      <PassCodeSetterForm />
      <AutomaticLockTime />
      <DisablePassCode />
    </div>
  );
}
