import { CartModel } from "../entity/CardModel";

export const deleteCartService = async (
  id: string,
  idUser: string
): Promise<boolean> => {
  try {
    if (!id) throw new Error(`No id provided`);
    if (!idUser) throw new Error(`No user provided`);

    console.log("Im here");
    const cartOwner = await CartModel.find({ _id: id });

    if (cartOwner.length === 0 || cartOwner[0].owner.toString() !== idUser)
      throw new Error("Cart does not exist");

    const cart = await CartModel.findByIdAndDelete(id);
    return cart && cartOwner ? true : false;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
