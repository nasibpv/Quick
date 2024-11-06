import { useQuery } from "@tanstack/react-query";
import { Row, Col } from "antd";
import { useParams } from "react-router";

// Function to fetch user data
    async function fetchUsers() {
    const response = await fetch('http://localhost:3004/doctors');
    return response.json(); // return the JSON data
    }

    function Doctor_Profiles() {
        const params=useParams()
        
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['users'], // Unique key for the query
        queryFn: fetchUsers, // The function that fetches data
    });

  const style = {
    padding: 5,
  };

  // Handle loading and error states
  if (isLoading) return <div className="flex justify-center items-center h-full">Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

    const result =data.data
  
  // Assuming data is an array of users, render the first user (or modify this as per your actual structure)
  const user =result.find(item=>item.id==params.id) // Grab the first user as an example

  return (
    <div>
      <Row>
        <Col className="gutter-row grid gap-2" sm={13}>
          <div className="p-3 shadow-md rounded-md w-full">
            <div className="flex justify-between items-center gap-1 border-b">
              <img
                src="#" // Placeholder for user image
                alt=""
                className="bg-yellow-100 rounded-3xl"
                width={40}
                height={40}
              />
              <div className="text-start w-full">
                <h4>{user.name || 'AAA'}</h4>
                <p className="text-gray-400 ">{user.specialization || 'aa'}</p>
              </div>
              <div>
                <a href="#">1</a>
                <a href="#">1</a>
              </div>
            </div>

            <div style={{ overflowY: 'scroll', maxHeight: '170px', overflowX: 'hidden' }}>
              <Row gutter={{ xs: 6, sm: 12, md: 24, lg: 32 }}>
                <Col className="gutter-row w-full" xs={6}>
                  <div style={style}>
                    <p className="text-gray-200 text-xs h-10">Date of Birth</p>
                    <p>10-0-2012</p>
                  </div>
                </Col>
                <Col className="gutter-row" xs={6}>
                  <div style={style}>
                    <p className="text-gray-200 text-xs h-10">Address</p>
                    <p>{user.address?.street || 'Abc'}</p>
                  </div>
                </Col>
                <Col className="gutter-row" xs={6}>
                  <div style={style}>
                    <p className="text-gray-200 text-xs h-10">Status</p>
                    <p>{user.status || 'Null'}</p>
                  </div>
                </Col>
                <Col className="gutter-row" xs={6}>
                  <div style={style}>
                    <p className="text-gray-200 text-xs h-10">Insurance</p>
                    <p>{user.insurance || 'Null'}</p>
                  </div>
                </Col>
              </Row>

              <Row gutter={{ xs: 6, sm: 12, md: 24, lg: 32 }}>
                <Col className="gutter-row w-full" xs={6}>
                  <div style={style}>
                    <p className="text-gray-200 text-xs h-10">Social Number</p>
                    <p>102012</p>
                  </div>
                </Col>
                <Col className="gutter-row" xs={6}>
                  <div style={style}>
                    <p className="text-gray-200 text-xs h-10">Phone Number</p>
                    <p>{user.phone}</p>
                  </div>
                </Col>
                <Col className="gutter-row" xs={6}>
                  <div style={style}>
                    <p className="text-gray-200 text-xs h-10">Gender</p>
                    <p>{user.gender || 'Male'}</p>
                  </div>
                </Col>
                <Col className="gutter-row" xs={6}>
                  <div style={style}>
                    <p className="text-gray-200 text-xs h-10">Registered On</p>
                    <p>{user.registeredOn || '10,Jan2012'}</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="p-3 shadow-md rounded-md w-full">
            <p>Time</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Doctor_Profiles;
