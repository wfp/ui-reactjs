from django.http import JsonResponse
from django.views import View

request_filters = {
  "form_types": [
    {"value": "one", "label": "FormOne"},
    {"value": "two", "label": "FormTwo"}
  ],
  "status_options": [
    {"value": "one", "label": "StatusOne"},
    {"value": "two", "label": "StatusTwo"}
  ],
  "officers": [
    {"value": 1, "label": "OfficerOne"},
    {"value": 2, "label": "OfficerTwo"}
  ]
}


class RequestFiltersJSON(View):
  def get(self, request, *args, **kwargs):
    return JsonResponse(request_filters)
