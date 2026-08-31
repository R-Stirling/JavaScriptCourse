// fetch('https://tools-httpstatus.pickup-services.com/404')
//   .then((res) => {
//     console.log(res.status);
//     return res;
//   })
//   .then(() => {
//     console.log('Success...still runs despite 404');
//   })
//   .catch((error) => console.log(error));

// fetch doesn't run catch if status is a non-200 fail, so test against the .ok on the result and throw new Error()
// fetch('https://tools-httpstatus.pickup-services.com/404')
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error('Request failed');
//     }
//     console.log(res.status);
//     return res;
//   })
//   .then(() => {
//     console.log('Success');
//   })
//   .catch((error) => console.log(error));

//   Check against status to assign specific error to response status
fetch('https://tools-httpstatus.pickup-services.com/401')
  .then((res) => {
    if (res.status === 404) {
      throw new Error('Not found');
    } else if (res.status === 500) {
      throw new Error('Server error');
    } else if (res.status !== 200) {
      throw new Error('Request failed');
    }
    console.log(res.status);
    return res;
  })
  .then(() => {
    console.log('Success');
  })
  .catch((error) => console.log(error));
