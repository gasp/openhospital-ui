import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPermissions } from "../../../../../state/permissions/actions";
import { IState } from "../../../../../types";
import { UserGroupDTO, PermissionDTO } from "../../../../../generated";
import InfoBox from "../../../infoBox/InfoBox";

import { PermissionCheckbox } from "./PermissionCheckbox";
import { CrudTable } from "./CrudTable";

interface IProps {
  userGroupId: Pick<UserGroupDTO, "code"> | string;
}

export const GroupPermissions = ({ userGroupId }: IProps) => {
  const dispatch = useDispatch();
  const permissionsState = useSelector(
    (state: IState) => state.permissions.getAll
  );
  useEffect(() => {
    dispatch(getAllPermissions());
  }, [dispatch]);

  if (permissionsState.hasFailed)
    return (
      <InfoBox
        type="error"
        message={`Unable to load permissions ${permissionsState.error?.toString()}`}
      />
    );
  if (!permissionsState.hasSucceeded || !permissionsState.data) return <>...</>;
  if (!permissionsState.data.length) return <>no permissions</>;
  return (
    <>
      <h2>Areas</h2>
      <ul>
        {permissionsState.data
          .filter(
            (perm: PermissionDTO) => perm.name && /\.access$/.test(perm.name)
          )
          .map((perm, index) => (
            <li key={index}>
              <PermissionCheckbox
                permission={perm}
                onChange={() => console.log}
                thisGroup={userGroupId as string}
              />
            </li>
          ))}
      </ul>
      <h2>Permissions</h2>
      <CrudTable
        permissions={permissionsState.data}
        userGroupId={userGroupId as string}
      />
      <ul>
        {permissionsState.data
          .filter(
            (perm: PermissionDTO) =>
              perm.name && /\.(create|read|update|delete)$/.test(perm.name)
          )
          .map((perm, index) => (
            <li key={index}>
              <PermissionCheckbox
                permission={perm}
                onChange={() => console.log}
                thisGroup={userGroupId as string}
              />
            </li>
          ))}
      </ul>
    </>
  );
};
