import matplotlib.pyplot as plt
squares=[1,4,9,16,25]
fig,ax=plt.subplots()
ax.plot(squares,linewidth=3)
ax.set_title("squares",fontsize=24)
ax.set_xlabel("values",fontsize=14)
ax.set_ylabel("squares of values",fontsize=14)
ax.tick_params(axis='both',labelsize=7)
plt.show()

input_values=[1,2,3,4,5]
squares=[1,4,9,16,25]
fig,ax=plt.subplots()
ax.plot(input_values,squares,linewidth=3)
ax.set_title("squares",fontsize=24)
ax.set_xlabel("values",fontsize=14)
ax.set_ylabel("squares of values",fontsize=14)
ax.tick_params(axis='both',labelsize=7)
plt.show()

