import { CartModel } from "../entity/CardModel";

export const editCartService = async (
  id: string,
  body: any
): Promise<boolean> => {
  try {
    if (!id) throw new Error(`No id provided`);
    if (!body.owner) throw new Error(`No user provided`);

    const cartOwner = await CartModel.find({ _id: id });

    if (cartOwner.length === 0 || cartOwner[0].owner.toString() !== body.owner)
      throw new Error("Cart does not exist");

    const cart = await CartModel.findByIdAndUpdate(
      {
        _id: id,
        owner: body.owner,
      },
      body
    );
    console.log({ cart });
    return cart ? true : false;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
