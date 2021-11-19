# Covid-Detection-using-Chest-X-Ray-Images

Well! Can you distinguish between two x-ray images and tell which x-ray image is having coronavirus or not. I bet you can’t but a Machine Can.
In this project, we are going to make a model that can predict whether the X-Ray image contains coronavirus or not.
Here is the Approach:

We have to create a Dataset contains two folders, in which one has sampled X-Ray images of Normal Patients. I have taken around 100 sampled X-ray images of Normal patients.
Then you have to create another folder in which you will put the X-Ray images of coronavirus patients. (For this you have to do some Data Analysis Stuffs.)
After creating two folders we will merge the images and set the labels
Then we will split that into training and testing set and create a VGG model that will predict our data.
After Predicting the data we deploy the model on cloud.
The Backend is designed using Flask Framework and for Front end we used HTML,CSS, and Javascript.
