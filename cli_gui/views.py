# import Http Response from django
from django.shortcuts import render

# create a function


def test_view(request):
    # create a dictionary to pass
    # data to the template
    context = {
        "data": "is the best",
        "list": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    # return response with template and context
    return render(request, "./templateTest.html", context)
