render(){
    return (
        <form>
            <div classname="container">
                <h1>Multiply</h1>
                <div>classname="form-group</div>
                <label>Enter Operand 1 </label>
                <input> type="number" id="num1"
                ref={this.op1Ref}
                placeholder="enter opeerand 1"/>
            </div>
            <div>
            ref={this.op1Ref}
            placeholder="enter opeerand 1"/>
            </div>
            <p ref={this=resultref}></p>
            </div>
            <button type="button" classmate="btn" onclick={() => this.mysubmit()} >Multiply</button>
            </div>
        </form>
    )
}