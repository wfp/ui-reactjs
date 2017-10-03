from django.http import JsonResponse
from django.views import View

request_filters = {
  "module_class": [{"value": "HR037", "label": "Education Grant Claim (HR037)"},
                   {"value": "HR039", "label": "Education Grant Advance (HR039)"},
                   {"value": "HR078", "label": "Telecommuting Arrangement (TCA) (HR078)"},
                   {"value": "HR049", "label": "Salary Allotment Instructions (HR049)"},
                   {"value": "HR038", "label": "Emergency Contact Address (HR038)"},
                   {"value": "HR045", "label": "Attendance sheet for Consultants and HQ SSAs (HR045)"},
                   {"value": "HR045b", "label": "Attendance sheet (WINGS integrated) (HR045B)"},
                   {"value": "HR033",
                    "label": "Banking instructions for non-payroll related payments (HR033)"},
                   {"value": "HR027", "label": "Rental Subsidy/Advance/Deduction (HR027)"},
                   {"value": "HR044", "label": "Leave/Absence Application (HR044)"},
                   {"value": "PersonalID", "label": "Personal IDs (Personal IDs)"},
                   {"value": "LANRequest", "label": "IT Systems Access Request (LANRequest)"},
                   {"value": "GiftDeclaration", "label": "Gift Declaration (Gift Declaration)"},
                   {"value": "NetAdmin", "label": "Privileged (ADM) Network Access (NetAdmin)"}],
  "current_status": [{"value": "supervisor_approval", "label": "Supervisor approval"},
                     {"value": "wings_submit_errors", "label": "Error"},
                     {"value": "closed", "label": "Closed"}, {"value": "draft", "label": "Draft"},
                     {"value": "supervisor_acknowledge", "label": "Supervisor acknowledge"},
                     {"value": "deleted", "label": "Deleted"},
                     {"value": "completed", "label": "Completed"},
                     {"value": "wings_progress", "label": "WINGS Progress"}]}


class RequestFiltersJSON(View):
  def get(self, request, *args, **kwargs):
    return JsonResponse(request_filters)
