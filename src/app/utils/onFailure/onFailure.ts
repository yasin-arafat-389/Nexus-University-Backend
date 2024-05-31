/* eslint-disable @typescript-eslint/no-explicit-any */
const onFailure = (value: any, message: string): void => {
  if (!value) {
    throw new Error(message);
  }
};

export default onFailure;
