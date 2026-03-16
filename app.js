// Initialize AngularJS ng-app
var app = angular.module('promptApp', []);

// Define the Main Controller
app.controller('PromptController', function($scope, $timeout) {
    
    // 1. Initial Dummy Data (Array of Prompt Objects)
    $scope.prompts = [
        { 
            title: 'React Code Generator', 
            category: 'Coding', 
            text: 'Act as an expert React developer. Create a functional React component with Tailwind CSS styling that acts as a user profile card. Include props for name, role, and avatar URL.' 
        },
        { 
            title: 'Blog Post Outline', 
            category: 'Writing', 
            text: 'Write a comprehensive outline for a blog post about the benefits of AI in modern software development. Include an SEO-friendly intro, 3 main points, and a call-to-action conclusion.' 
        },
        { 
            title: 'Brand Logo Ideation', 
            category: 'Design', 
            text: 'You are an expert brand designer. Generate 5 unique logo concepts for an eco-friendly coffee shop focusing on minimalist and organic themes. Describe the color palette for each.' 
        },
        { 
            title: 'Welcome Email Sequence', 
            category: 'Marketing', 
            text: 'Draft a 3-part welcome email sequence for new subscribers to our B2B SaaS product. Focus on onboarding, value delivery, and driving the first user action.' 
        },
        { 
            title: 'SQL Query Optimization', 
            category: 'Coding', 
            text: 'Review the following PostgreSQL query and optimize it for a database with over 1 million rows. Provide an explanation of the changes made and why they improve execution time.' 
        }
    ];

    // 2. Model for the "Add Prompt" form (ng-model)
    $scope.newPrompt = {
        title: '',
        category: 'Coding', // Default category
        text: ''
    };

    // 3. Search querying variable (ng-model & filter)
    $scope.searchQuery = '';

    // 4. Function handling form submission (ng-submit)
    $scope.addPrompt = function() {
        // Ensure title and text are not empty before adding
        if ($scope.newPrompt.title && $scope.newPrompt.text) {
            
            // Add new prompt to the beginning of the array
            $scope.prompts.unshift({
                title: $scope.newPrompt.title,
                category: $scope.newPrompt.category,
                text: $scope.newPrompt.text
            });
            
            // Reset the form fields
            $scope.newPrompt = {
                title: '',
                category: 'Coding',
                text: ''
            };
        }
    };

    // 5. Function handling prompt deletion (ng-click)
    $scope.deletePrompt = function(prompt) {
        // Confirm before deletion
        if(confirm('Are you sure you want to delete this prompt?')) {
            var index = $scope.prompts.indexOf(prompt);
            if (index > -1) {
                $scope.prompts.splice(index, 1); // Remove from array
            }
        }
    };

    // 6. Function handling copying prompt text to clipboard (ng-click)
    $scope.copyPrompt = function(text, event) {
        navigator.clipboard.writeText(text).then(function() {
            // Provide temporary UI feedback (Change icon to a checkmark)
            if (event && event.currentTarget) {
                var btn = event.currentTarget;
                var originalHtml = btn.innerHTML;
                btn.innerHTML = '<i class="fa-solid fa-check text-green-500"></i>';
                
                // Revert back to original icon after 2 seconds
                $timeout(function() {
                    btn.innerHTML = originalHtml;
                }, 2000);
            }
        }).catch(function(err) {
            console.error("Failed to copy text: ", err);
            alert("Failed to copy to clipboard.");
        });
    };

    // 7. Helper Function: Return specific Tailwind color classes based on the category
    $scope.getCategoryClass = function(category) {
        switch(category) {
            case 'Coding': return 'bg-blue-100 text-blue-800';
            case 'Writing': return 'bg-green-100 text-green-800';
            case 'Design': return 'bg-pink-100 text-pink-800';
            case 'Marketing': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800'; // Fallback for 'Other'
        }
    };
    
});
