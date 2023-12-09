import fetch from "node-fetch";

export async function getRequest(url) {
  const response = await fetch(url);
  return await response.json();
}

export async function postRequest(url, body) {
  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
