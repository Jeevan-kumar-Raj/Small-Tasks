import { memo, useCallback, useEffect, useMemo, useState } from "react";

const List = memo((list) => {
  useEffect(() => {
    console.log("list changed");
  }, [list]);

  return <ul>{list?.length > 0 && list.map((e) => <li>{e}</li>)}</ul>;
});

const DeepCompare = () => {
  const [a, setA] = useState(0);

  const someFunc = useCallback(
    () => console.log("This is a random function"),
    []
  );

  useEffect(() => {
    console.log("Use effect of someFunc's called");
  }, [someFunc]);

  const fakeList = useMemo(() => ["number 1", "number 2"], []);

  return (
    <div className="App">
      <h1>Variable a: {a} </h1>
      <button onClick={() => setA((v) => v + 1)}>Increase a</button>
      <button onClick={someFunc}>call someFunc()</button>
      <List list={fakeList} />
    </div>
  );
};

export default DeepCompare;
