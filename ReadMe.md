### Data set info

* label         - Plant Type
* N             - ratio of Nitrogen content in soil
* P             - ratio of Phosphorous content in soil
* K             - ratio of Potassium content in soil
* temperature   - temperature in degree Celsius
* humidity      - relative humidity in %
* ph            - ph value of the soil
* rainfall      - rainfall in mm

### Data Set Link
https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset/data

* XML file has been created by taking the average of optimal conditions by grouping them according to labels.

### How to open on local server with python:
* Open terminal and input the folowing lines:

Enter the folder directionary:
```bash
cd ...\OptimalPlantCareXML
```
Start the server:
```bash
python -m http.server 8000
```

* Visit this adress:
http://localhost:8000/OptimalPlantCare.xml



""""""""""""""""""
cd <this folder>
python -m http.server 8000
""""""""""""""""""