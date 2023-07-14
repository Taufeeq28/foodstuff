// This TypeScript code defines an FoodService class that provides methods for retrieving food items and tags
import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data'; // Importing sample data arrays
import { Food } from '../shared/models/Food'; // Importing the Food model
import { Tag } from '../shared/models/Tag'; // Importing the Tag model

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  // Returns all food items
  getAll(): Food[] {
    return sample_foods; // Returning the sample food items array
  }

  // Returns all food items that match the search term
  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    // Filtering the food items based on the search term and returning the filtered results
  }

  // Returns all tags
  getAllTags(): Tag[] {
    return sample_tags; // Returning the sample tags array
  }

  // Returns all food items that have a specific tag
  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    // If the tag is "All", return all food items; otherwise, filter the food items based on the tag and return the filtered results
  }
}

// The service is marked as @Injectable({ providedIn: 'root' }) to ensure that a single instance of the service is shared 
// across the application. It imports the required data arrays and models to provide the necessary functionality.