from django.urls import path

from apps.users.views import FollowUser, GetListOfAllFollowers, GetListOfPeopleUserIsFollowing, \
    SendFriendRequest, UserListSearch, GetSpecificUser, ShowPendingReceivedFriendRequests, ShowPendingSentFriendRequests, \
    GetLoggedUser, UserRegistration, ValidateUpdateRegistration


urlpatterns = [
    path('', UserListSearch.as_view()),
    path('registration/', UserRegistration.as_view()),
    path('registration/validation/', ValidateUpdateRegistration.as_view()),
    path('me/', GetLoggedUser.as_view()),
    path('toggle-follow/<int:user_id>/', FollowUser.as_view()),
    path('followers/', GetListOfAllFollowers.as_view()),
    path('following/', GetListOfPeopleUserIsFollowing.as_view()),
    path('request/<int:user_id>/', SendFriendRequest.as_view(), name="send-friend-request"),
    path('requests/<int:user_id>/', ShowPendingReceivedFriendRequests.as_view()),
    path('requests/<int:user_id>/', ShowPendingSentFriendRequests.as_view()),
    path('?search=<str:search_string>/', UserListSearch.as_view()),
    path('<int:user_id>/', GetSpecificUser.as_view()),
]
