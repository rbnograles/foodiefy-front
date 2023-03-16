import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t("helloWorld")}</div>
      <div>TODO: Delete this component after.</div>
    </>
  );
};

export default App;
