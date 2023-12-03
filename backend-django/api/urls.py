from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('note-list/', views.noteList, name= "note-list"),
    path('note-detail/<str:pk>/',views.noteDetail, name= "note-list"),
    path('note-create/', views.noteCreate, name= "note-create"),
    path('note-update/<str:pk>/',views.noteUpdate, name= "note-update"),
    path('note-delete/<str:pk>', views.noteDelete, name= "note-delete"),
]                                                                                                                                                                                                                                                        