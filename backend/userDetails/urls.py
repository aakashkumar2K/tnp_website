from django.urls import path
from . import views
from django.urls import path
from userDetails.views import ResetPasswordView
from django.contrib.auth import views as auth_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("register" , views.register , name = "register"),
    path("login" , views.login , name = "login"),
    path("SaveDetails",views.SaveDetails,name = "SaveDetails"),
    path('activate/<uidb64>/<token>', views.activate, name='activate'),
    path("userProfile" , views.userProfile , name="userProfile"),
    path("UpdateDetails" , views.UpdateDetails , name = "UpdateDetails"),
    path('CollegeRegister',views.CollegeRegister,name='CollegeRegister'),
    path('password_reset', ResetPasswordView.as_view(), name='password_reset'),
    path('password-reset-confirm/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(template_name='userDetails/password_reset_confirm.html'),name='password_reset_confirm'),
    path('password-reset-complete/',auth_views.PasswordResetCompleteView.as_view(template_name='userDetails/password_reset_complete.html'),name='password_reset_complete'),

    # JWT Authentication paths
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/login/', views.jwt_login, name='jwt_login'),
    
]