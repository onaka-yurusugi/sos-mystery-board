export type MysteryEventCategory = "UFO" | "幽霊" | "超能力" | "その他";

export type MysteryEvent = {
  id: string;
  title: string;
  description: string;
  category: MysteryEventCategory;
  location: string;
  reporter: string;
  createdAt: string;
};

export type CreateMysteryEventInput = Omit<MysteryEvent, "id" | "createdAt">;
