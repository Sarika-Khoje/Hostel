from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

FIXED_USERNAME = "Sarika"
FIXED_PASSWORD = "a1b2c3d400928z"

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if username == FIXED_USERNAME and password == FIXED_PASSWORD:
        return Response({
            "message": "Login successful",
            "role": "admin"  # for now same role
        }, status=status.HTTP_200_OK)

    return Response({
        "message": "Invalid credentials"
    }, status=status.HTTP_401_UNAUTHORIZED)
