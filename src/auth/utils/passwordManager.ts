import bcrypt from "bcrypt";

export const encrypPassword = async (password: string): Promise<string> => {
  const salts = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salts);
};

export const validatePassword = async (
  password: string,
  encryptedPassword: string
) => {
  return await bcrypt.compare(password, encryptedPassword);
};
