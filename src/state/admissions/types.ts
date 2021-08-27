import { AdmissionDTO, TherapyRowDTO } from "../../generated";
import { IApiResponse } from "../types";

export type IAdmissionsState = {
  createAdmission: IApiResponse<TherapyRowDTO>;
  admissionsByPatientId: IApiResponse<Array<TherapyRowDTO>>;
  currentAdmissionByPatientId: IApiResponse<AdmissionDTO>;
};
