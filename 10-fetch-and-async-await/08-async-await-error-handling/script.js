// async function
const getUsers = async () => {
  // try await fetch
  try {
    const response = await fetch(
      'https://tools-httpstatus.pickup-services.com/404',
    );
    // test if response is a failure status
    if (!response.ok) {
      // throw new Error if response isn't ok
      throw new Error('Request Failed');
    }
    // code to run if status ok
    const data = await response.text();

    console.log(data);
    // catch takes in the error defined above and runs if try code fails to run due to test
  } catch (error) {
    console.log(error);
  }
};

// Can use .catch() when invoking the function instead of try catch
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const res = await fetch('https://tools-httpstatus.pickup-services.com/500');

  if (!res.ok) {
    throw new Error('Posts not found');
  }
  const data = await res.json();
  console.log(data);
};

// .catch() added to function call
getPosts().catch((error) => console.log(error));

// getUsers();
