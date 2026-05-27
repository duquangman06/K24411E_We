pip install pandas scikit-learn matplotlib
pip install kaggle

import pandas as pd

# Load dataset
from sklearn.datasets import load_wine

# Split dataset
from sklearn.model_selection import train_test_split

# Classification methods
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier

# Evaluation
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report


# 1. LOAD WINE DATASET

wine = load_wine()

# Features
X = wine.data

# Labels
y = wine.target

print("Wine Dataset Loaded Successfully!")
print()


# SHOW DATASET INFORMATION


print("Dataset Shape:")
print(X.shape)

print()

print("Feature Names:")
print(wine.feature_names)

print()



# 2. SPLIT TRAINING AND TEST DATA

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.3,
    random_state=42
)

print("Training Data:", len(X_train))
print("Testing Data:", len(X_test))

print()

# 3. KNN CLASSIFICATION
print("===== KNN CLASSIFICATION =====")

# Create model
knn_model = KNeighborsClassifier(n_neighbors=3)

# Train model
knn_model.fit(X_train, y_train)

# Predict
knn_predictions = knn_model.predict(X_test)

# Accuracy
knn_accuracy = accuracy_score(y_test, knn_predictions)

print("KNN Accuracy:", knn_accuracy)

print()

print("KNN Classification Report:")
print(classification_report(y_test, knn_predictions))

print()

# 4. DECISION TREE CLASSIFICATION

print("===== DECISION TREE CLASSIFICATION =====")

# Create model
dt_model = DecisionTreeClassifier(random_state=42)

# Train model
dt_model.fit(X_train, y_train)

# Predict
dt_predictions = dt_model.predict(X_test)

# Accuracy
dt_accuracy = accuracy_score(y_test, dt_predictions)

print("Decision Tree Accuracy:", dt_accuracy)

print()

print("Decision Tree Classification Report:")
print(classification_report(y_test, dt_predictions))

print()

# 5. COMPARE RESULTS

print("===== MODEL COMPARISON =====")

print("KNN Accuracy:", knn_accuracy)
print("Decision Tree Accuracy:", dt_accuracy)

print()

if knn_accuracy > dt_accuracy:
    print("KNN performs better.")
elif dt_accuracy > knn_accuracy:
    print("Decision Tree performs better.")
else:
    print("Both models perform equally.")