interface ContactInfoProps {
    contactInfo: {
        salutation: string;
        firstName: string;
        sureName: string;
        email: string;
        phone: string;
    };
    setContactInfo: React.Dispatch<React.SetStateAction<{
        salutation: string;
        firstName: string;
        sureName: string;
        email: string;
        phone: string;
    }>>;
}


function ContactInfo({ contactInfo, setContactInfo }: ContactInfoProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setContactInfo({
            ...contactInfo,
            [name]: value
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Who should receive the free lease calculation by email?</h2>
            <p className="text-center mb-8">
            We will then send you an email with the lease calculation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
                <select  name="salutation" value={contactInfo.salutation} onChange={handleChange} className="border p-2 rounded-md mb-4 md:col-span-2">
                    <option value="Salutation">Salutation*</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                </select>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={contactInfo.firstName}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="sureName"
                    placeholder="Sure Name*"
                    value={contactInfo.sureName}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={contactInfo.email}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone*"
                    value={contactInfo.phone}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                
            </div>
        </div>
    );
}

export default ContactInfo;