// src/components/claims/tabs/ClaimInfoTab.tsx
export const ClaimInfoTab = () => {
  return (
    <div className="space-y-6">
      {/* First Row: Carrier/Insurer and Shop Information */}
      <div className="grid grid-cols-2 gap-6">
        {/* Carrier/Insurer Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">
            Carrier/Insurer Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Insurer's Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Insurer Auth #
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>
              <div className="flex items-center mt-6">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-700">
                  Talked to Insured
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Replacement Cost
                </label>
                <select className="mt-1 block w-full border rounded-md px-3 py-2">
                  <option>Select type</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Claim Initiated By
                </label>
                <select className="mt-1 block w-full border rounded-md px-3 py-2">
                  <option>Select initiator</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Policy #
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Claim #
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Deductible
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Authorization Notes
              </label>
              <textarea className="mt-1 block w-full border rounded-md px-3 py-2 h-24" />
            </div>
          </div>
        </div>

        {/* Shop Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Shop Information</h2>
            <button className="text-blue-600 hover:text-blue-700">
              <span className="sr-only">Search</span>
              🔍
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shop Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact #
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Customer and Vehicle Information */}
      <div className="grid grid-cols-2 gap-6">
        {/* Customer Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Customer Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Address 1
            </label>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Address 2
            </label>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Province
              </label>
              <select className="mt-1 block w-full border rounded-md px-3 py-2">
                <option>Select province</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Home Tel #
              </label>
              <input
                type="tel"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Business Tel #
              </label>
              <input
                type="tel"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Driver's License
            </label>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Vehicle Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Make
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Body Style
              </label>
              <select className="mt-1 block w-full border rounded-md px-3 py-2">
                <option>Select style</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              VIN
            </label>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Plate #
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Odometer
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                License Province
              </label>
              <select className="mt-1 block w-full border rounded-md px-3 py-2">
                <option>Select province</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Work Order Memo and Internal Notes */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Work Order Memo</h2>
          <textarea className="w-full h-32 border rounded-md px-3 py-2" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Internal Notes</h2>
          <textarea className="w-full h-32 border rounded-md px-3 py-2" />
        </div>
      </div>
    </div>
  );
};
