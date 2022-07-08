
it('should calculate the monthly rate correctly', function() {
    const values = [400000,30,3.5];
    
    expect(calculateMonthlyPayment(values)).toEqual('$1796.18');
  });
  
  
  it('should calculate high year counts correctly', function() {
    const values = [5000,200,5];
  
    expect(calculateMonthlyPayment(values)).toEqual('$20.83');
  });
  
  
  it('should calculate with low numbers', function() {
    const values = [1,1,.01];
  
    expect(calculateMonthlyPayment(values)).toEqual('$0.08');
  });
  
  