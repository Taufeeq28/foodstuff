// This TypeScript code defines a Food class with various properties representing different attributes of a food item
// By creating an instance of the Food class and assigning values to its properties, you can represent and manipulate information
// about a specific food item in your application.

export class Food {
  id!: string; // The unique identifier of the food item
  name!: string; // The name of the food item
  price!: number; // The price of the food item
  tags?: string[]; // Optional array of tags associated with the food item
  favorite!: boolean; // Indicates whether the food item is marked as a favorite or not
  stars!: number; // The rating of the food item in stars
  imageUrl!: string; // The URL of the image representing the food item
  origins!: string[]; // An array of origins or countries associated with the food item
  cookTime!: string; // The cooking time required for the food item
}