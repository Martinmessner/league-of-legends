export function LoadingOn() {
  return <div className="loader center-loader"></div>;
}

export function TimeLoading() {
  return (
    <>
      <div className="timer-loader loader-time"></div>
      <h1>Cargando...</h1>
    </>
  );
}
