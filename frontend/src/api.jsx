export async function getMessages() {
  const response = await fetch("http://127.0.0.1:8000/api/messages/");
  const data = await response.json();
  return data;
}

export async function uploadFile(file) {

  const formData = new FormData();

  formData.append("file", file);
  formData.append("text", file.name);

  const response = await fetch("http://127.0.0.1:8000/api/messages/", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  return data;
}