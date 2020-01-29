

1. What pages will need to be created?
2. What data will need to be saved, updated, and when?
3. What variables will need to be used to track data?
4. STRETCH: What data will need to be saved to local storage?
5. What rules exists and what algorithms (flow charts) need to be defined?


Step 1. The thing you want to build today will select three random photos from the available product images and display them side-by-side-by-side in the browser window.

build out the HTML Skeleton

Data form for images: write an API
    id - identifier
    image - path to image
    name - display name

Get random images:
    Need 3 non duplicated images 

Display Side by side
    Need HTML to display image

Click functionality

1. keep track of how many times a user has voted, period (up to 25)
2. keep track of votes for a given product

3. display three random NON-duplicated products
4. display three NEW NON-duplicated poducts ***refresh products between votes***

    a. whichever one they clicked on, see if they've voted for it before
    
    b. EVENT LISTENER
    c. when they select a product, update the total votes
    d. update the productVoteDetails
    e. if theres coffee in the votes array, increment the votes for coffee in the array
    f. if theres no coffee in the votes array, push some coffee into the array

5. reset the whole app when finished
    a. set the votes array ([]) and total votes (0) to their initial states

6. STRETCH keep track of how many times a product appears so we can build a percentage (times clicked / times shown)

7 STRETCH: dont show the same product twice in a row.