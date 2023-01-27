import { DateRange } from "@material-ui/pickers";
import moment from "moment";
import React, { FunctionComponent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Admissions } from "../admissions/Admissions";
import { Discharges } from "../discharges/Discharges";
import { Opds } from "../opds/Opds";
import { DashboardFilter } from "./filter/DashboardFilter";
import { SideContent } from "./SideContent";
import "./styles.scss";

export const DashboardContent: FunctionComponent = () => {
  const { t } = useTranslation();

  const [period, setPeriod] = useState([
    moment().startOf("day").toISOString(),
    moment().endOf("day").toString(),
  ]);

  const handlePeriodChange = useCallback((value: string[]) => {
    setPeriod(value);
  }, []);

  return (
    <div className="dashboard__content">
      <div className="dashboard__main">
        <div className="header">
          <DashboardFilter onPeriodChange={handlePeriodChange} />
        </div>
        <div className="body">
          <Opds period={period} />
          <Admissions period={period} />
          <Discharges period={period} />
        </div>
      </div>
      <div className="dashboard__side">
        <SideContent />
      </div>
    </div>
  );
};