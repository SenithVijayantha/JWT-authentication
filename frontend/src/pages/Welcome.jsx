import Login from "./Login";

const Welcome = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            quisquam excepturi laudantium vitae iusto consectetur quibusdam
            Possimus, porro eveniet sequi nostrum totam temporibus.
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Welcome;
