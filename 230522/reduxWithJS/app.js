function reducer(state, action) {
  console.log(state, action);
  if (state === undefined) {
    return {
      text: "hello",
      border: "5px solid #f6866a",
      borderRadius: "0px",
    };
  } else if (action.type === "TEXT") {
    return {
      ...state,
      text: action.text,
    };
  } else if (action.type === "STYLE_BORDER") {
    return {
      ...state,
      borderRadius: action.borderRadius,
    };
  } else if (action.type === "STYLE_BORDER_COLOR") {
    return {
      ...state,
      border: action.border,
    };
  }
}

const store = Redux.createStore(reducer);

// render 함수
function item1() {
  const state = store.getState();
  console.log(state);
  const $item = document.querySelector("#item1");
  $item.textContent = `${state.text}`;
  $item.style.borderRadius = `${state.borderRadius}`;
  $item.style.border = `${state.border}`;
}
store.subscribe(item1);
item1();

function item2() {
  const state = store.getState();
  console.log(state);
  const $item = document.querySelector("#item2");
  $item.textContent = `${state.text}`;
  $item.style.borderRadius = `${state.borderRadius}`;
  $item.style.border = `${state.border}`;
}
store.subscribe(item2);
item2();

function item3() {
  const state = store.getState();
  console.log(state);
  const $item = document.querySelector("#item3");
  $item.textContent = `${state.text}`;
  $item.style.borderRadius = `${state.borderRadius}`;
  $item.style.border = `${state.border}`;
}
store.subscribe(item3);
item3();

function item4() {
  const state = store.getState();
  console.log(state);
  const $item = document.querySelector("#item4");
  $item.textContent = `${state.text}`;
  $item.style.borderRadius = `${state.borderRadius}`;
  $item.style.border = `${state.border}`;
}
store.subscribe(item4);
item4();

function item5() {
  const state = store.getState();
  console.log(state);
  const $item = document.querySelector("#item5");
  $item.textContent = `${state.text}`;
  $item.style.borderRadius = `${state.borderRadius}`;
  $item.style.border = `${state.border}`;
}
store.subscribe(item5);
item5();

function item6() {
  const state = store.getState();
  console.log(state);
  const $item = document.querySelector("#item6");
  $item.textContent = `${state.text}`;
  $item.style.borderRadius = `${state.borderRadius}`;
  $item.style.border = `${state.border}`;
}
store.subscribe(item6);
item6();
