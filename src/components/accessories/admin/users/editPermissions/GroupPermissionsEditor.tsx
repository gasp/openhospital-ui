import React, { useEffect, useState } from "react";

import { PermissionDTO } from "../../../../../generated";
import { AclTable } from "./AclTable";
import { AreaAccess } from "./AreaAccess";

interface IProps {
  permissions: PermissionDTO[];
  thisGroupId: string;
  setDirty: (v: boolean) => void;
  update: (a: any) => void; // TODO: rename this
}
export const GroupPermissionsEditor = ({
  permissions,
  thisGroupId,
  setDirty,
  update,
}: IProps) => {
  const [permissionsState, setPermissionsState] = useState<PermissionDTO[]>([]);

  useEffect(() => {
    setPermissionsState(permissions);
  }, [permissions]);

  const handleChange = (newPermission: PermissionDTO) => {
    setDirty(true);

    const newState = permissionsState.map((perm) =>
      perm.id === newPermission.id ? newPermission : perm
    );
    setPermissionsState(newState);
    update(newPermission);
  };

  return (
    <>
      <h2>Areas access</h2>
      <AreaAccess
        permissions={permissionsState}
        thisGroupId={thisGroupId}
        onChange={handleChange}
      />

      <h2>Access-control list</h2>
      <AclTable
        permissions={permissionsState}
        userGroupId={thisGroupId}
        onChange={handleChange}
      />
    </>
  );
};