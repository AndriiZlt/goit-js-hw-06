const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const allFormData = {};
  const formElements = event.currentTarget.elements;
  if (!formElements.email.value || !formElements.password.value) {
    alert("Fill in all fields!");
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      allFormData[name] = value;
    });
    console.log(allFormData);
  }
}
