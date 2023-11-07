import React, { useEffect } from "react";
import SectionBanner from "./SectionBanner";
import ProfileOptions from "./ProfileOptions";
import EditDetails from "./EditDetails";
import { useDispatch, useSelector } from "react-redux";
import AddAddress from "./AddAddress";

function ProfilePage() {
  const dispatch = useDispatch();
  const { showEditDetails, showAddressEditor } = useSelector(
    (store) => store.profile
  );

  useEffect(() => {
    window.scrollTo(100, 100);
    dispatch({ type: "header/showProfleSubmenu" });
  }, [dispatch]);

  return (
    <div className="container__profile-page">
      <SectionBanner title={"Account"} />
      <ProfileOptions />
      {showEditDetails && <EditDetails />}
      {showAddressEditor && <AddAddress />}
    </div>
  );
}

export default ProfilePage;
