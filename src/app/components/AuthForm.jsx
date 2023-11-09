import Link from "next/link";

const AuthForm = ({
  Email,
  setEmail,
  Password,
  setPassword,
  name,
  setName,
  phone,
  setPhone,
  address,
  setAddress,
  city,
  setCity,
  zip,
  setZip,
  handleSubmit,
  page,
}) => {
  return (
    <form className="row g-3 w-75 ms-auto me-auto" onSubmit={handleSubmit}>
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">
          الإيميل
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="col-md-12 mb-2">
        <label htmlFor="inputPassword4" className="form-label">
          كلمة السر
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {page === "register" && (
        <>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              الأسم
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputName"
              placeholder="فلان الفلاني"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              رقم الهاتف
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              placeholder="0123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              العنوان
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              المدينة
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputZip" className="form-label">
              الرمز البريدي
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </div>
        </>
      )}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary w-25">
              تسجيل
            </button>
            {page === 'register' ? (
              <Link href="/login" className="d-block mt-2">
              هل لديك حساب بالفعل ؟
            </Link>
            ) : (
              <Link href="/sign-up" className="d-block mt-2">
              تسجيل حساب جديد 
            </Link>
            )}
          </div>
    </form>
  );
};
export default AuthForm;
