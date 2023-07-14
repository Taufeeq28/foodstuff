import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = []; // Array to store the retrieved food items

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => { // Subscribe to route parameter changes
      if (params.searchTerm) {
        // If the 'searchTerm' parameter is present in the route
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        // Retrieve food items that match the search term using the FoodService method
      } else if (params.tag) {
        // If the 'tag' parameter is present in the route
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
        // Retrieve food items that have the specified tag using the FoodService method
      } else {
        // If no specific parameter is present in the route
        this.foods = foodService.getAll();
        // Retrieve all food items using the FoodService method
      }
    });
  }

  ngOnInit(): void {
    // Empty method body (as per the OnInit interface requirements)
  }
}


// This TypeScript code defines the HomeComponent class, which is responsible for retrieving
// and displaying the food items based on the route parameters. Here's a breakdown of the important parts:

/*foods: Food[]: An array to store the retrieved food items.
constructor(private foodService: FoodService, activatedRoute: ActivatedRoute): The constructor of the component.
                                 It injects the FoodService and ActivatedRoute dependencies.
activatedRoute.params.subscribe((params) => { ... }): Subscribes to changes in the route parameters and executes 
                                 the callback function whenever there is a change.
if (params.searchTerm) { ... }: Checks if the searchTerm parameter is present in the route. 
                                If so, it retrieves the food items that match the search term using the 
                                getAllFoodsBySearchTerm() method from the FoodService.
else if (params.tag) { ... }: Checks if the tag parameter is present in the route. If so, it retrieves the food items
                              that have the specified tag using the getAllFoodsByTag() method from the FoodService.
else { ... }: If no specific parameter is present in the route, it retrieves all food items using the getAll() method 
              from the FoodService.
ngOnInit(): void { ... }: The lifecycle hook ngOnInit(), which is called after the component is initialized.
                          It is left empty in this code.

Overall, this code sets up the HomeComponent to fetch the appropriate food items based on the route parameters 
and assigns them to the foods array for display in the component's template.*/