import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="grid justify-center items-center">
      <Spinner />
      <p className="text-xl text-primary-200">正在加载...</p>
    </div>
  );
}

export default loading;
