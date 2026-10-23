### Lab 04

#### Instructions

In this assignment you will add React UI library to the React application. Using your Lab 3 for continuing this Lab.

#### Objectives and Outcomes

In this assignment, you will continue to work with the React application that you have been developing in the Lab 1, 2 and 3. You will add Bootstrap library for redesigning some components at routes: Index (path="/"), Detail (path='/detail'), About (path='/about'), Natural (path='/naturals', using isNatural value), special(path="/"), Contact (path='/contact) which are used some components of React UI such as: Modal, Tab, Collapsible, Icon, NavBar,…).

Learn to use Form validation by Formik. You will install and configure Formik, Yup and use it within your React application. At the end of this exercise, you will be able to:

- Install and configure Formik, Yup within your React application

**Assignment Requirements**

- All the images are put in a folder or using the URL.
- The data stored in ListOfOrchid.js file, update the data file for showing the clip of orchid.
- Using React UI Library Components.
- The UI looks attractive.

#### Install and Configure Formik, Yup

- Install Formik and Yup into your application as follows:

```
npm install formik yup
```

Your package.json file like:

```
"formik": "^2.2.9",
"yup": "^0.32.11" ,
```

#### Create Contact components for display the view

- Create the Contact component (named Contact.js) to add the new contact by yourself (use Materialize, Material UI or some libraries which support Material design), the screen display as follow:

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApAAAAIfCAIAAABIMXsKAAAAAXNSR0IArs4c6QAAP41JREFUeF7t3V1QHOe95/EW+C0JRaCMFCs2OhKJE+nE2q2BSI4sbe1eeE1Z3sCFZdeu73ZRhFxK1vJqVejiVCqVOheidLSSYqsEisjeOVu2fAGO5MLlrd1TRy8BBaa25BwpydGECCnYgCNEcOLEAvb/9Nv0DAN0P8AzNP3tOqUDzPP6eXB+0093D6ump6ctDgQQQAABBBBY3gIly3t4jA4BBBBAAAEElACBze8BAggggAACMRAgsGOwSAwRAQQQQAABApvfAQQQQAABBGIgQGDHYJEYIgIIIIAAAgQ2vwMIIIAAAgjEQIDAjsEiMUQEEEAAAQQIbH4HEEAAAQQQiIEAgR2DRWKICCCAAAIIENj8DiCAAAIIIBADAQI7BovEEBFAAAEEECCw+R1AAAEEEEAgBgIEdgwWiSEigAACCCBAYPM7gAACCCCAQAwEVun9ec2JiYnBwcGxsbGpqakYzJIhIoAAAgggsAwESkpKKioqqqury8rKog5HJ7Alra9evbp+/fo1a9aUlpZG7ZLyCCCAAAIIJFNgcnJyeHh4YGBg8+bNUTNbJ7CvXbsmbxDWrl2bTG5mjQACCCCAwEIEhoaGZIt606ZNkRrRuYYt3ci5daRuKIwAAggggAACjoBkqCRpVA2dwJbr1uyER4WmPAIIIIAAAo6AZKjGHWA6gY04AggggAACCBgWILANg9MdAggggAACOgIEto4adRBAAAEEEDAsQGAbBqc7BBBAAAEEdAQIbB016iCAAAIIIGBYgMA2DE53CCCAAAII6AgQ2Dpq1EEAAQQQQMCwAIFtGJzuEEAAAQQQ0BEgsHXUqIMAAggggIBhAQLbMDjdIYAAAgggoCNAYOuoUQcBBBBAAAHDAgS2YXC6QwABBBBAQEeAwNZRow4CCCCAAAKGBQhsw+B0hwACCCCAgI4Aga2jRh0EEEAAAQQMCxDYhsHpDgEEEEAAAR2BJQ/szLnm5ua23ju5g7vT29bcfD6jM2LqIIAAAgggkECBJQ9s2zTd8VbveAJ1mTICCCCAAAKLJGAmsC2rr+ONK0T2Ii0azSCAAAIIJE/ASGDXNTU1WOkzF2bfAh/vPS07595xziuods7bejNq/9w52iT17e1057ucnfbsz5ub/RaSt6LMGAEEEEBgRQoYCWzL2vhcS6PV2Vo4RyWtD3Y82tLuHIebUl2tKpjdI93ROvqM/UqLSv2DzYf8b9Mdh7zr4JLWhzqs3Ufsgkeabrc2n2YTfkX+xjIpBBBAIKEChgLbsmp27E5ZXa0FbjS7c72/L9X0VI27ApUba+us9PCovyCp3Tuc12o2Ncq/jS07A9/eHLVvZ8tc6kjXNb20pdwuWL71haZUX8ccZ/QJXW2mjQACCCAQWwFjgW2Vb3mpqU7OsmdEduXWve17t1Za3l73wY6+HM51DzsxbFmVVSkrVSUl84/M9S4rldrolZOSKvVvfsxV89j+YjJwBBBAAIFcAXOB7Z74FtgY9y5gH+pIN8jG+BHJdY1D7ZZnj/zU12iQKggggAACCCwfAZOBLSe+W19SG+Pv5dwslrnQIVvih+2rz895G+PRhVLuBWz3Urj8v73uDnn0tqiBAAIIIIDAMhMwG9hylq02xuU+so60BzH+8U2rrnajv9GtLmlHRaqqyr3sLRe1z/PBLFEVKY8AAgggsIwFTAe2tzGeJSl/eJ08pe3dIDbe+5ad5bdHo1x/tu8yC9xbnjnX2lnX5N6rtoz1GRoCCCCAAAIhBcwHttoYf6YhMLyanUd2pzpbnevPB/tTR+TxLatvNHubeJipyJ1rh5ss7zJ26+2mI3u2Zu9BC9MCZRBAAAEEEFjGAqump6ejDu/ixYvbt2+PWovyCCCAAAIIIOAIaCRpMc6wWS4EEEAAAQQQiChAYEcEozgCCCCAAALFECCwi6FOnwgggAACCEQUILAjglEcAQQQQACBYggQ2MVQp08EEEAAAQQiChDYEcEojgACCCCAQDEECOxiqNMnAggggAACEQUI7IhgFEcAAQQQQKAYAgR2MdTpEwEEEEAAgYgCBHZEMIojgAACCCBQDAECuxjq9IkAAggggEBEAQI7IhjFEUAAAQQQKIYAgV0MdfpEAAEEEEAgogCBHRGM4ggggAACCBRDgMAuhjp9IoAAAgggEFGAwI4IRnEEEEAAAQSKIUBgF0OdPhFAAAEEEIgoQGBHBKM4AggggAACxRDQCeySkpLJyclijJY+EUAAAQQQiL2AZKgkadRpRK4gHVRUVAwPD0ftifIIIIAAAgggIAKSoZKkUSl0Aru6unpgYGBoaIjz7KjclEcAAQQQSLKA5Kakp2SoJGlUh1XT09NR60j5iYmJwcHBsbGxqakpjepUQQABBBBAIIECshMu59aS1mVlZVGnrxnYUbuhPAIIIIAAAggsREBnS3wh/VEXAQQQQAABBDQECGwNNKoggAACCCBgWoDANi1OfwgggAACCGgIENgaaFRBAAEEEEDAtACBbVqc/hBAAAEEENAQILA10KiCAAIIIICAaQEC27Q4/SGAAAIIIKAhQGBroFEFAQQQQAAB0wIEtmlx+kMAAQQQQEBDgMDWQKMKAggggAACpgUIbNPi9IcAAggggICGAIGtgUYVBBBAAAEETAsQ2KbF6Q8BBBBAAAENAQJbA40qCCCAAAIImBYgsE2L0x8CCCCAAAIaAgS2BhpVEEAAAQQQMC1AYJsWpz8EEEAAAQQ0BAhsDTSqIIAAAgggYFqAwDYtTn8IIIAAAghoCBDYGmhUQQABBBBAwLQAgW1anP4QQAABBBDQECCwNdCoggACCCCAgGkBAtu0OP0hgAACCCCgIbBqenpao9rExMTg4ODY2NjU1JRGdaoggAACCCCQQIGSkpKKiorq6uqysrKo09cJbEnrq1evrl+/fs2aNaWlpVG7pDwCCCCAAALJFJicnBweHh4YGNi8eXPUzNYJ7GvXrskbhLVr1yaTm1kjgAACCCCwEIGhoSHZot60aVOkRnSuYUs3cm4dqRsKI4AAAggggIAjIBkqSRpVQyew5bo1O+FRoSmPAAIIIICAIyAZqnEHmE5gI44AAggggAAChgUIbMPgdIcAAggggICOAIGto0YdBBBAAAEEDAsQ2IbB6Q4BBBBAAAEdAQJbR406CCCAAAIIGBYgsA2D0x0CCCCAAAI6AgS2jhp1EEAAAQQQMCxAYBsGpzsEEEAAAQR0BAhsHTXqIIAAAgggYFiAwDYMTncIIIAAAgjoCBDYOmrUQQABBBBAwLAAgW0YnO4QQAABBBDQESCwddSogwACCCCAgGEBAtswON0hgAACCCCgI0Bg66hRBwEEEEAAAcMCBLZhcLpDAAEEEEBAR2DV9PR01HoXL17cvn17yFqZc82tXQXKpnYf2bulPGQjcxcbv9J2MF17ZM/Wcmu89/TB/tSitbwow6MRBBBAAAEE8gQiJalT10hg326y09TAQWAbQKYLBBBAAIGFCmgENlviC0WnPgIIIIAAAgYEih3Yd3rbmtt6M/Kve7RdGbfUD52jrfdOACFz3iuV85JsiTef7h03oEUXCCCAAAIIFEmg2IGtpp3uaB19pl0dLQ1W+szB5kP+t+mOQ+czDo2kdevNpsN2OVUy8FKR7OgWAQQQQAABYwJGAruv42Dg1HjmqXNq944ae8Y1mxrl38aWnYFvb47aJ9mZa51WwzNbK10Zu6T7kjEsOkIAAQQQQKBYAkYCu67piHti7P+/vX70yszXPezdkVZZlbJSVV4qB1Fqnmtvf07luNx2ro7WzmKR0S8CCCCAAALmBYwE9qJMy7uA3dqVUhvjLepcnAMBBBBAAIGECMQlsMd735ct8Rb7DD3n7Dwh68Q0EUAAAQQSLhCXwB4d7bMaNzmXttWhLmlzIIAAAgggkBiBuAR2VVWd1fm+9+xW5rz96Wlp5340DgQQQAABBFa8gJHALnCXeHPEJ6fLt+5pafTbabVaDjel5Dbxj3n6esX/ijJBBBBAAAElsOQfTQozAggggAACCOQJ8NGk/EoggAACCCCwMgWMbImvTDpmhQACCCCAgDkBAtucNT0hgAACCCCgLUBga9NREQEEEEAAAXMCBLY5a3pCAAEEEEBAW4DA1qajIgIIIIAAAuYECGxz1vSEAAIIIICAtgCBrU1HRQQQQAABBMwJENjmrOkJAQQQQAABbQECW5uOiggggAACCJgTILDNWdMTAggggAAC2gIEtjYdFRFAAAEEEDAnQGCbs6YnBBBAAAEEtAUIbG06KiKAAAIIIGBOgMA2Z01PCCCAAAIIaAsQ2Np0VEQAAQQQQMCcAIFtzpqeEEAAAQQQ0BYgsLXpqIgAAggggIA5AZ3ALikpmZycNDdGekIAAQQQQGAFCUiGSpJGnVDkCtJBRUXF8PBw1J4ojwACCCCAAAIiIBkqSRqVQiewq6urBwYGhoaGOM+Oyk15BBBAAIEkC0huSnpKhkqSRnVYNT09HbWOlJ+YmBgcHBwbG5uamtKoThUEEEAAAQQSKCA74XJuLWldVlYWdfqagR21G8ojgAACCCCAwEIEdLbEF9IfdRFAAAEEEEBAQ4DA1kCjCgIIIIAAAqYFCGzT4vSHAAIIIICAhgCBrYFGFQQQQAABBEwLENimxekPAQQQQAABDQECWwONKggggAACCJgWILBNi9MfAggggAACGgIEtgYaVRBAAAEEEDAtQGCbFqc/BBBAAAEENAQIbA00qiCAAAIIIGBagMA2LU5/CCCAAAIIaAgQ2BpoVEEAAQQQQMC0AIFtWpz+EEAAAQQQ0BAgsDXQqIIAAggggIBpAQLbtDj9IYAAAgggoCFAYGugUQUBBBBAAAHTAgS2aXH6QwABBBBAQEOAwNZAowoCCCCAAAKmBQhs0+L0hwACCCCAgIYAga2BRhUEEEAAAQRMCxDYpsXpDwEEEEAAAQ0BAlsDjSoIIIAAAgiYFiCwTYvTHwIIIIAAAhoCq6anpzWqTUxMDA4Ojo2NTU1NaVSnCgIIIIAAAgkUKCkpqaioqK6uLisrizp9ncCWtL569er69evXrFlTWloatUvKI4AAAgggkEyBycnJ4eHhgYGBzZs3R81sncC+du2avEFYu3ZtMrmZNQIIIIAAAgsRGBoaki3qTZs2RWpE5xq2dCPn1pG6oTACCCCAAAIIOAKSoZKkUTV0AluuW7MTHhWa8ggggAACCDgCkqEad4DpBDbiCCCAAAIIIGBYgMA2DE53CCCAAAII6AgQ2Dpq1EEAAQQQQMCwAIFtGJzuEEAAAQQQ0BEgsHXUqIMAAggggIBhAQLbMDjdIYAAAgggoCNAYOuoUQcBBBBAAAHDAgS2YXC6QwABBBBAQEeAwNZRow4CCCCAAAKGBQhsw+B0hwACCCCAgI4Aga2jRh0EEEAAAQQMCxDYhsHpDgEEEEAAAR0BAltHjToIIIAAAggYFiCwDYPTHQIIIIAAAjoCBLaOGnUQQAABBBAwLEBgGwanOwQQQAABBHQEVk1PT0etd/Hixe3bt4eslTnX3NqVXza1+8jeLeX2TzPnm1utlvadNSHboxgCCCCAAAKxF4iUpM5sjZxh1zUdaQ8ch5usMwfbrozH3psJIIAAAgggYErASGDnTaZy60u7U+n0dRLb1CrTDwIIIIBA7AWKEdgOWt/oaFZPNsa941wmiCo76v5xPvvKeO/p5rYrGfnXPU73BuN//EpboVqxXy0mgAACCCCQWIHiBPbocNqqq6ry1Dtb36s6bO+ZtzRaXa1eMKtUbu1qbHF201saO1ubA5ltpc+0jj5tv3S4KdXX8Ya3xy5pffCM1eQ0eLjpZqtEOyfzif0NZ+IIIIDAChEoRmBnzsttaKnURueuMzlSu1/aWml/VbOjqc7qvGafSmcudPSlmg57t6PV7GxpsDrfD5xJN7S4r1VufabB8vbYMxfOpLMNOtvvZy7knLavkLVjGggggAACCRIwEth9HQezG9vNza2dctbs3SWurNc97Gd3ln7845vySpUT5E6ab2q0+vqv3/Fifo1/ih5YsMz1TitV+9Vsg+VfrU1ZN0e9WglaW6aKAAIIILCCBIwEdt5d4u2hH+IKbJtHMU93HAq8QTjUkY5SmbIIIIAAAggsQwEjga0975wb05xWcs65Z2lYNtKDj5HJ13vdLXftkVARAQQQQACBogos38Auf3idlbuVnbnWGbxVrbBbZVXKSudsgKs70IM3qxXVm84RQAABBBDQEli+gW3fgCab217W2reqNT69tcDl7uDM7bvMOlvbet2L1lKtM7V7Bx+kpvXrQSUEEEAAgeUisIwD2yrfuqe9pUEe5rKP1puy0R3mE0zLt+w9stvyLmO33sx+DOpyQWccCCCAAAIIRBVY8s8SjzogyiOAAAIIILDiBZbrZ4mveHgmiAACCCCAwBILLOct8SWeOs0jgAACCCAQHwECOz5rxUgRQAABBBIsQGAnePGZOgIIIIBAfAQI7PisFSNFAAEEEEiwAIGd4MVn6ggggAAC8REgsOOzVowUAQQQQCDBAgR2ghefqSOAAAIIxEeAwI7PWjFSBBBAAIEECxDYCV58po4AAgggEB8BAjs+a8VIEUAAAQQSLEBgJ3jxmToCCCCAQHwECOz4rBUjRQABBBBIsACBneDFZ+oIIIAAAvERILDjs1aMFAEEEEAgwQIEdoIXn6kjgAACCMRHgMCOz1oxUgQQQACBBAsQ2AlefKaOAAIIIBAfAZ3ALikpmZycjM8cGSkCCCCAAALLSEAyVJI06oAiV5AOKioqhoeHo/ZEeQQQQAABBBAQAclQSdKoFDqBXV1dPTAwMDQ0xHl2VG7KI4AAAggkWUByU9JTMlSSNKrDqunp6ah1pPzExMTg4ODY2NjU1JRGdaoggAACCCCQQAHZCZdza0nrsrKyqNPXDOyo3VAeAQQQQAABBBYioLMlvpD+qIsAAggggAACGgIEtgYaVRBAAAEEEDAtQGCbFqc/BBBAAAEENAQIbA00qiCAAAIIIGBagMA2LU5/CCCAAAIIaAgQ2BpoVEEAAQQQQMC0AIFtWpz+EEAAAQQQ0BAgsDXQqIIAAggggIBpAQLbtDj9IYAAAgggoCFAYGugUQUBBBBAAAHTAsX6aNLM+ebWzuBkG1ran6sxPftw/WXONbd2WVZd05E9W8uzVYJTaGxp32mPXn74XtXhvVsr521aVbe8avOWpgACCCCAQMIFinmGLSnnHUeabreezyzPtRgfvZ1qOtzePiOtb+4+4oz/yO6brc3LdfjLE5VRIYAAAghEFChmYAeGWl71qHXz43HrTm9bc1vb6eZmN//Ge9XX6sjmoZyaOj85d775dO+4c1p7uq1NfuR/61byaqkCvb3nvJZUL+pou6Jq5x55Pcq3Bzv60h2HcgP5zuhNK1X7Vfd8u3zLM41W5/WMFJZtAync1nvHkvNyr33Vpjd+r/1z151+A8Ws8StthYYUcUkpjgACCCCwEgWWSWBnrndZ6x528i+97mk5a1U7zJlzBzusJnUa29LY2apSUIVza6d9an6k6nZgT73PqnVOgiWMW2+qE2J14pvqfN9OdDn6OkY3qZ811XW2Hhp9xm4zfeZC3ln9jB7Lt+6RKpa/5e3+DlRurK0LpnjNTjViKdzSaMnp+Kxb4tn2N1nO6Gs2NabT1+1Bjl9PW/6bgJX4y8acEEAAAQT0BYoZ2J2t3olwc6tsLzsXgS0rVeVeAJa9aKvxafuycc2Oprp0/7+MW5nrnXVNO1TJ8q1PNwbmvc6tVbl1b7ubl+UPrwsUaNxo15JT+dRuu4HKqlS+W6EeC9tKNjtvI2ZsAMy1FnntO4m9sbFvdFS+uHO936rdOP/Fb/3FpiYCCCCAQHwFFvmms4mJicHBwbGxsampqSDK9u3bc41mueVKzo/V6a9/A1f2tizZOn5vzZGXrDcOpmvdm7+kjfer1Nf+F3Yf7j1iTn/OnWKBAk47e7eUq+33bF9O6ZxReSUt2RUffdodU+GVVk3116oT6+xNZ9mOLLWvbrcQbN//oRrw9U3tOz5ue8N6SQ1sxnHx4sX4/oYxcgQQQGBlC5SUlFRUVFRXV5eVlS3tTKcX7/jjH/946dKl3//+9/fu3Zuv1Rvn9uw5d2NGqT/0nMr++G5Pu/+N+vpU791pqdfec9ep53+d90O/UqECN35mtyNHTl9Oi4V6zPmhN2Bp+WfB0fsV5YVTPX+wR+d3pAbqjCm/fVdAtdbT0+5WnI+O1xFAAAEElpGARJ4En8SfhOCSDmsxt8Tl3Hr9+vVr164tLS1djHcZavvavQidudDRZ9/kpTaQO+wrz+O97+c8Fzajx3kLzBxjoR4LzkSG0RW4rd0enreTn63gXpyWbXz3Z+UbU95ldVXFK6la6+hgP3wxfmloAwEEEDAsIJEnwSfxJyG4pF0vZmDLTviaNWsWcbg1zx1psjoOymVidaOZc2W6Zqd75fgNKxW8hu2Hn1ztdq4sv2E93ZRyLg+HPgr1WDixd7a3WP41eHWbmzO8qip1M5q6P67muRZ5b6EGf61KbltzjvItL7kzer+qqcFvuWZjg5VKbSywGx565BREAAEEECiigMSfhOCSDmAxr2HLpdYZ16qXcPDqWrV88shy/biVKDMP/3ErUVqlLAIIIICAQYGlDsHFPMM2weI9Qq3Oum83HVkBaa1mJDfJvxTiw9FMANMHAggggMDyFIjxGfbyBGVUCCCAAALJFOAMO5nrzqwRQAABBBDIEYjbljjLhwACCCCAQCIFCOxELjuTRgABBBCImwCBHbcVY7wIIIAAAokUILATuexMGgEEEEAgbgIEdtxWjPEigAACCCRSgMBO5LIzaQQQQACBuAkQ2HFbMcaLAAIIIJBIAQI7kcvOpBFAAAEE4iZAYMdtxRgvAggggEAiBQjsRC47k0YAAQQQiJsAgR23FWO8CCCAAAKJFCCwE7nsTBoBBBBAIG4CBHbcVozxIoAAAggkUoDATuSyM2kEEEAAgbgJFDmwR955uSb/eLnrQ08xfbKm5mR/3Ez7X6upeW0ho+4/+d2ukbjNmvEigAACCCypQHEDe+Ryd7f16tlM4Og5Ye1/yg3p/gtHrZ3V1UsKsPiN918+ZtWv1x71SNd3d31Qv2314g+MFhFAAAEEYixQ3MAeHDyfn22rtzxbb31wS51kj9z6lWV9/bGYRdeHtz6wrCf0R61MFlA9xr+LDB0BBBBAYA6BogZ2+vLRubItN84/7MrunudtOAdfyt1MDm65n0wHHeRE1t+Ln2vXfdYWZhvP0GC3VV+9Nrir73b08js5+9wFWlaXAHaJydHna/IK80uMAAIIIJB0genFOy5cuBCpseGuvRs2vN6XWyf7w6HOvRv2dg7ZL/e/vmHDhr1dw/Y3ffKN9/X0tCq24fV+p5Xhzn0bNvzIbTKnfdWC15rdwoZ9nW5zP8p+nTf+WVuYfTyqiteyXd0bW844p2drOVg9EiaFEUAAAQS0Bd57772DsxzyUshmo4ZgyGb9YkU8w7YvYOddok6ffPKV7gNv76uV91HqVPWJxx6Rr/pPPn9ULnWf+razO1774on67lfedG7r6n9rf/erZ/elnDdeq7fV11u/uuWcyQ4OyAXybaopOVIvHt/Z/e4V9Ur/a3IWe+Ds6w1ucy8crz+//82c82/3bdwsLcw1HlXF2cb/sOv7r3TXn+hxx/ZIw3detY522HeTqZes45fsaeaOLVs96e8kmT8CCCBgTuDf28fM/mb7ubmRBXoqYmCrHW/r/P4ng3eJP//B8UsZJ+Gyd5ypnfP64y+46aZi+bEn/CnUfi+T+V72JRV43lG9vt46tsu7YXt1w+sZO/Ltm8JOvJit80igudxFKNzCXOPJ3nE2cuXdbuvAd9w3Gapd1Zp9qJd2PrtNvRdxDn9s6rL9Am5YK8qvEJ0igAACK0FgZjYvq7QW4uIFtn1z1oG3g3eIy9enGtwYy95xppLb6t7/VCDY5YTbO9QzVIFj17HsfWqrv32q54Sd2XL4l73tC+fdrwTfJ6jLxgWPgi3MNZ7sHWf2/oF11O7bPWTzwMlr9VLhm+m442wl/GfPHBBAIKYCwYRebmmtSKPuoc9RPtL2fcEL2IHG1WVm58p0n1xj9i5Lz3WNeeblba+0cy3ZbURdfs6/cD4vQrCFOcZjX2t3GldX07MX2nM6mP2l4GX7ecdEAQQQQACBJRCQi9bhr1sH+48UghoDL9oZttq7nuMZa3Wq6t5rrXaSvcvS6i2GfXu2c8t3zjVm+d7erH52i+x72zeBe2fV3onyZXXZe22199iY8xYwp2TgXeGsLcwxnhEZtTup1Y993eoeGMw2qO4Az34mTPAl/4NW7F1057I9BwIIIIBAcQSW47m1LVGswFbXeud6xjp7x5mlnszO3hTWf/Kp7F1m9jVmO4adIM9ulau8tI792PvQNOcTWuwb0B7Z9uzO7v1vuZX6X3ty//kDZwNXwb1fkFlbmGM8wVvGanccyA7AHlv9iR/aG/72nXHesOXhrl3HAlfo4/dBMcX5L4peEUAAgcQJaJyVz1Ylwm5A7jNOMxtU287ew1HqVbu8c+TuM9vPcbnH6325W8qqEf/I2VQP1Ar2MmMcs7ZQeDy5z5tJa/bTX87hPXjm9uHusduvZB9sc8v7j58t4uLQFAIIIIDA0gpECEGtgaySWov1JuXixYvbt29frNZoBwEEEEAAgRgJLHUIFmtLPEZLwFARQAABBBAovgCBXfw1YAQIIIAAAgjMK0Bgz0tEAQQQQAABBIovQGAXfw0YAQIIIIAAAvMKENjzElEAAQQQQACB4gsQ2MVfA0aAAAIIIIDAvAIE9rxEFEAAAQQQQKD4AgR28deAESCAAAIIIDCvAIE9LxEFEEAAAQQQKL4AgV38NWAECCCAAAIIzCtAYM9LRAEEEEAAAQSKL0BgF38NGAECCCCAAALzChDY8xJRAAEEEEAAgeILENjFXwNGgAACCCCAwLwCBPa8RBRAAAEEEECg+AIEdvHXgBEggAACCCAwrwCBPS8RBRBAAAEEECi+wGIGdklJyeTkZPHnxAgQQAABBBAwKyDxJyG4pH0uZusVFRXDw8NLOlwaRwABBBBAYBkKSPxJCC7pwBYzsKurqwcGBoaGhjjPXtI1o3EEEEAAgeUjIJEnwSfxJyG4pKNaNT09vYgdTExMDA4Ojo2NTU1NLWKzNIUAAggggMDyFJCdcDm3lrQuKytb0hEucmAv6VhpHAEEEEAAgcQKLOaWeGIRmTgCCCCAAAJLLUBgL7Uw7SOAAAIIILAIAgT2IiDSBAIIIIAAAkstQGAvtTDtI4AAAgggsAgCBPYiINIEAggggAACSy1AYC+1MO0jgAACCCCwCAIE9iIg0gQCCCCAAAJLLaD5HDYfkLLUC0P7CCCAAAIrT2Ahn7KiE9iS1levXl2/fv2aNWtKS0tXHigzQgABBBBAYCkE5HNM5VPH5XNMN2/eHPWT0XQC+9q1a/IxbGvXrl2KydAmAggggAACK1tAPntcPsN706ZNkaapcw1bupFz60jdUBgBBBBAAAEEHAHJUEnSqBo6gS1/2IOd8KjQlEcAAQQQQMARkAzV+BNZOoGNOAIIIIAAAggYFiCwDYPTHQIIIIAAAjoCBLaOGnUQQAABBBAwLEBgGwanOwQQQAABBHQECGwdNeoggAACCCBgWIDANgxOdwgggAACCOgIENg6atRBAAEEEEDAsACBbRic7hBAAAEEENARILB11KiDAAIIIICAYQEC2zA43SGAAAIIIKAjQGDrqFEHAQQQQAABwwIEtmFwukMAAQQQQEBHgMDWUaMOAggggAAChgUIbMPgdIcAAggggICOAIGto0YdBBBAAAEEDAsQ2IbB6Q4BBBBAAAEdgaUO7PHe083NzW29dwoMLnNOXjqf0Rk2dRBAAAEEEEiWwFIHtq1ZZ/UfmhHMmfOtXcmyZrYIIIAAAghoCxgJ7EfXrbM6r+ecSo/3vn+zsSGlPW4qIoAAAgggkCiBVdPT01EnfPHixe3bt4erJVviBzsebWmxWlutlvbnatxad3rb3rKeSfW3nlnX0r7T+2nmfHNrp1OirunInq3lXh+yee6fjqd2H9m7xXslUCO3it1vn1e/IdC1ZWVbq2tqerSj43a2r/ErbQfPpJ1qjYGRhZsspRBAAAEEEAglECVJvQYlsKMeFy5cCF3lbk/7nj0/uzF949yePedueNXu9p461XtX/g38UJVQJe3jxs/kG7e8+rq9567zwh96snVUjVM9f3Be8DrK/9qtIt1lW/Zas3vJNm6Px2vQ7sivFXq+FEQAAQQQQGB+gShJ6rZmZEtc3hzUbGzM7oqPX09btV/1z5/Ve4fxK+91yjmtdwpe81yLlH/vyri8Mnrbsh6tcktXbt3b7p6Sj39807LWVVU6bz3Kt+5pd8/g71zv70s1PeWdt1durK2z0sOjqtSd3ve6Uk0vuOfudi/+kblwJp3a/dJWp8HKrS/tTqXPXOCeuFDvFSmEAAIIILDEAqYC26qqqrM6r9nxl7nQYdVudIPWmZ9EeNpq2OhlrJ3wDU7Klm9Mpayu1pn3k5d/tTZldRZ4QYX6XpW7svEu96E3Z/fGx/+lP53NeLcXVzhzvdNKBd9G2O3fHC10f/sSLwrNI4AAAgggkC9gLLDt3L09KqfMmWudqdTGnPNrZ1QqlbOHf9G6fMvednUmrLJZHad7pRHnJDj3Bf/hMedZsubmQx1puXrdfqSpLuTCpzsOBUYg1UPWoxgCCCCAAAJLLTD/RvuMElF23gOXltVVYblCLFee3evEgWvYwSvQc47IvtLtX+oOFHVesC9751zbzrm8nXvV3LtY7lzSzq+lAUMVBBBAAAEEQglESVLD17DVCXHVOivd/9Z7nXV5++HyWnnVo5Zz/u0d6iy5TV3Dzj1qdh7Z7Z6p579wuMnZwVbXtoNdqEvabtkZu9yZ6/6z4JVVKSudswEut6DzuS5L/YaR9hFAAAEEwgkY2xKX4diXpfvSBffD1f1ffR0Hz7n3eI1feaOjr/EZ9fiWvb/t/VxdAJdbw+wddXkEKxiomUsdaTunyx9eZ/V1eHeLjfe+Ze9sO+8GKrc+05DueMvdVM+cs58ic+5os+8y62z199Xlg106U7t3BC6rhxOlFAIIIIAAAksgYOg5bPf+bfXY9M2mw/YdYXbiHpztOeycp6Bnfag6+Nh08MHp4M/lue1nhg+2dmUfq84+h92Q/4B4XsXsA99LQE+TCCCAAAKJFdB4DnupA3uZr4V6K9CfCnwSyzIfL8NDAAEEEFgRAhqBbXJLfBkYq8vSgevS8oBZX86jXMtgiAwBAQQQQACBAgKJO8PO3UVP+fvz/HYggAACCCBgTEDjDDtxgW1sMegIAQQQQACB2QQ0AjthW+L87iCAAAIIIBBPAQI7nuvGqBFAAAEEEiZAYCdswZkuAggggEA8BQjseK4bo0YAAQQQSJgAgZ2wBWe6CCCAAALxFCCw47lujBoBBBBAIGECBHbCFpzpIoAAAgjEU4DAjue6MWoEEEAAgYQJENgJW3CmiwACCCAQTwECO57rxqgRQAABBBImQGAnbMGZLgIIIIBAPAUI7HiuG6NGAAEEEEiYAIGdsAVnuggggAAC8RQgsOO5bowaAQQQQCBhAgR2whac6SKAAAIIxFOAwI7nujFqBBBAAIGECRDYCVtwposAAgggEE8BAjue68aoEUAAAQQSJkBgJ2zBmS4CCCCAQDwFCOx4rhujRgABBBBImACBnbAFZ7oIIIAAAvEUILDjuW6MGgEEEEAgYQIEdsIWnOkigAACCMRTgMCO57oxagQQQACBhAkQ2AlbcKaLAAIIIBBPAQI7nuvGqBFAAAEEEiZAYCdswZkuAggggEA8BQjseK4bo0YAAQQQSJgAgZ2wBWe6CCCAAALxFCCw47lujBoBBBBAIGECBHbCFpzpIoAAAgjEU4DAjue6MWoEEEAAgYQJENgJW3CmiwACCCAQTwECO57rxqgRQAABBBImQGAnbMGZLgIIIIBAPAUI7HiuG6NGAAEEEEiYAIGdsAVnuggggAAC8RQgsOO5bowaAQQQQCBhAgR2whac6SKAAAIIxFOAwI7nujFqBBBAAIGECRDYCVtwposAAgggEE8BAjue68aoEUAAAQQSJkBgJ2zBmS4CCCCAQDwFCOx4rhujRgABBBBImACBnbAFZ7oIIIAAAvEUILDjuW6MGgEEEEAgYQIEdsIWnOkigAACCMRTgMCO57oxagQQQACBhAkQ2AlbcKaLAAIIIBBPAQI7nuvGqBFAAAEEEiZAYCdswZkuAggggEA8BQjseK4bo0YAAQQQSJgAgZ2wBWe6CCCAAALxFCCw47lujBoBBBBAIGECBHbCFpzpIoAAAgjEU4DAjue6MWoEEEAAgYQJENgJW3CmiwACCCAQTwECO57rxqgRQAABBBImQGAnbMGZLgIIIIBAPAUI7HiuG6NGAAEEEEiYAIGdsAVnuggggAAC8RQgsOO5bowaAQQQQCBhAgR2whac6SKAAAIIxFOAwI7nujFqBBBAAIGECRDYCVtwposAAgggEE8BAjue68aoEUAAAQQSJkBgJ2zBmS4CCCCAQDwFCOx4rhujRgABBBBImACBnbAFZ7oIIIAAAvEUILDjuW6MGgEEEEAgYQIEdsIWnOkigAACCMRTgMCO57oxagQQQACBhAkQ2AlbcKaLAAIIIBBPAQI7nuvGqBFAAAEEEiZAYCdswZkuAggggEA8BQjseK4bo0YAAQQQSJgAgZ2wBWe6CCCAAALxFCCw47lujBoBBBBAIGECBHbCFpzpIoAAAgjEU4DAjue6MWoEEEAAgYQJENgJW3CmiwACCCAQTwECO57rxqgRQAABBBImQGAnbMGZLgIIIIBAPAUI7HiuG6NGAAEEEEiYgE5gl5SUTE5OJgyK6SKAAAIIILA4ApKhkqRR24pcQTqoqKgYHh6O2hPlEUAAAQQQQEAEJEMlSaNS6AR2dXX1wMDA0NAQ59lRuSmPAAIIIJBkAclNSU/JUEnSqA6rpqeno9aR8hMTE4ODg2NjY1NTUxrVqYIAAggggEACBWQnXM6tJa3LysqiTl8zsKN2Q3kEEEAAAQQQWIiAzpb4QvqjLgIIIIAAAghoCBDYGmhUQQABBBBAwLQAgW1anP4QQAABBBDQECCwNdCoggACCCCAgGkBAtu0OP0hgAACCCCgIUBga6BRBQEEEEAAAdMCixbY8jy33iPdpmdMfwgggAACCMRQYEHPYTsJPTOnV61aJT93/uVAAAEEEEAAgYULaAa2cz7tRLUEs3M44V3w5wsfKC0ggAACCCCQZAGdwM6L5IJ8Ycok2Z25I4AAAgggEEkgcmBLEjufH15aWjpvT85fB5GPTmV7fF4rCiCAAAIIIDCHQLTAjpTWTq+//OUve3p6/D3z2YYioV5eXi6fh75x48YvfOELWms20vXdJ/eftw68ndmX0mpg0Sr1n/zurRdfb1gdscH+116+9cKphkciVluOxe21+PrZzPdqjY7uw66Xn9r/hPsL0H+yZpfl/TIEbNXY3q3vOfXtqOtjdCp0hgACCOQJRLhL3L8+Hebc2u/mG9/4xle+8pV5byCXs3b5219Xr159++23f/3rX+us04eX3z1/4MCr1tGOrhGd+otWp/+1XUc1Gkuf3HVMoxpVZhOo3Zfx3rrl2K5ueD1DWvN7gwACsROIFtgSq3IqHHWSdXV14R/6ki4uXbqkkdn9b+3v3ln94o4D1vl3L38YdYyURwABBBBAYFkLhE1f//RaI7Dlr34+/vjj855kB51+/vOff/LJJ1Hk+i8fs+rrt61ObTtgdb97Je8cW3ZBa9zjtS719Wv9duOya/py1zsn7Zde7nJiXrZVvbJeMX8gUt47vlvwPF51pE6Uz+9/0m9QunnNr1ZzMl1gWiPvvFzzvJyWd+9/qubld9zBqx96R6CW6uLkO+4g5eeq2He7+rOF1USydYPjDE6t5qRDUOgIcMkAXCuHS8YfQMi+JK8GkS/PtXbBYeQwBloODi+tuu1X/7pHjmGgtZNXgt06o7UpcmzVOH1kNavCqzPnZAODEfzi7uhE+c+EsgggEGcBP4nn/kJOfD/77LO//vWvIcvnFbtx48aZM2d+8pOf/M/Qxy9+8YsIffW/vmHD3s4hVaPvRxs27OsczlYe7ty3YcOP+uwf2F/L4X7bJ9U2bHjdeU0dQ517paEup7ZdONuUXditaPcSrBgYa+4AnB69LtQ4N7zeX2hmgSmovrvUQJwZFRiV/5JbMm9Gud86Y7an5nc9Q8kfUpArr2uHyxtVzlxyrGycrFXObHMFssOwh1eY167iL0SOfM56OcPz56i+deebY6uGmrPEhVdn9snOaM0fdoTfWIoigAACEQWinWFHunodfBuzenXkG3wGBwfDvxHqv3DU2vnsNvt2rVq1K77/Tf9ENv3m/vMHzrp3P61u+Lvj9bnt1p940b8zyt5XP/5D93Yku7DX1Mg7Pz5q+e1Ytd87e8A6+mPvbHjWoare649f2ud2kdp3NtRV9v43X+muP/FD9wa0Rxp+eKK++5U3s+fEr34n9960+uMvOD3UbntV/vXHaX/7q1vqFHBosNuqr17rjrT2e5lMwdvi1K0AfmuW9ci2Z3da3QPZtciOKvXi8Z3W0Qv2oJxp/p17n52NU/hQK/XqWf+uQH8YjnyPd5PaDN5A4y/ICh69bK9v7nrV7nt7tm5nGc18q1NwsiO3PrCsJx5z7w1UV8RN31sX/j8MSiKAwAoSCBvYMmV5K6CxH+5YyY3fUj2S2/j4eNjyH3b9+Jh1oMm7KzsYJPK/6SrLq6v9tuwECh5PPOa/mfD21XMLf6DybuRyd7f16rbATc8qC4NJVnC0uf/jbidqmKvs6ctHrfpnt2Tf5aze8my99cEt79p8/frshOx+/fywqtfX58zXH5Z9sSC45V6Y95GGUxn7TnV3q1ndeD8LV/bHapreGyb7p9XVucheUVs4f/Dy4sitX1nW17Mr4bzz6O6+7O02ZycYGIyqpa6D+D9aW533bmzuX6F5Vyfwu5FtyV6Lo7vs/XYOBBBAwJhAqMB2stZ5/HohR9TMDtnXyJV3uy3r6PP+JU47Y45dnv0a7VwNd7/yZPaCc01uXB2T/5XOHmFv6g6+XQg5JVVMhWv2eGq/zHFhh9w13SPnxP4EZ8kb71K09Pjq2YxdZd5jcCBvdKsf+/qslQqmoJQuFORz9zw4mPtmwnrksSfmHWteAY3VUe9p1BaC9yvn3f0QtWvKI4AAAlEEQgW23+C9e/eiNJ4tOzExEbWiPJYdropz7ivREjguZXdNwzWSLVV/oienqUzgEaC8XqRcmOeMz8/c3C94vpg3UtlIzx/Igh/Rtvdv1aFi+OjzhZLG3SW2S4WZnT1qdVqfc9hnzLMc9o5FgaPAdkXOOffMKjPO4z9Uu9XRDs3VUc+M2Yckt7y1muMOvmjDoTQCCCAwm0CowHY+p0z2w+W+Mz3Kjz76SCpG+rwz+RCVUH2pa67WgR25H9Bh73s7D2TbW9CByLTLz3KoAMiNDfdOY8uyTxmdi8HukX+zccE2V6tTvuxWtpTJ36IvWE1t7XYPDgVec+6UDiUSppAkt0qanC7sevmb23NxZTtS08x5mm7Gua9bdqaw88JM3tk2z4OzU7UC2+bOdfoIh+bq5PRQu0+9O8xZ4ggjoCgCCCAQWiBUYDutSdxqB/bAwECktJY3B/KRZ2FmoW47sg5sy/9os9Xb6uvdCFGXtI/uch9AGun6e7W3PMvuq32X2bFd/jM/6iNQdh5/0W5c3QYlD2t5DzKNvPN9uZftO/N+WpbqPXAGZn+CR/Zy+2wztO8yC5wB9598/mjw5rgwMvllVORnT6mde+hmuElySvT6t+y5XLnvVAp17kzz790HnGb/6JjVDU0HrGO7/N14+/Ez9UakVm4lC/DaLczP69T6vnvrn1KKJqO1Ov6Ynb7sG9/cGx6j9U5pBBBAIIpA2MD2P1tUnuyK0r4qe/fuXXmsK1Ktb33rW+E+oFSdh+XeC+b2Y98Z5DyQLWeTPcd/5Vx+ls+kPDvXRVm5PHnpuOVdxt71q+M92VupZRf07AHvMvaTrzxxNuPd+507Nzd73JuS1C702VfVPUrqeP4D2egu/Mmpbni4zz2v/vapnhOWdxl71wcnFvxRmql9mbef8K+LP/mKlb13PTj+1L4e9V7BGa76CE+5rT1ni6LwQtrIljx9ro5d1vFZkWUYl45/4N1wkGV0Lgx7vEp+Ft6c/nPWa5d1Iv8RALdwrm2ghdCrE6yjluYD/3aGXccOnPV+SZxn4nksO9J/7BRGAIGQAmE/S1zuF3MexZar0VVVVSFbd4q9++67t2/flpPmMDeZSxlJ66997WuRuohSOOcjpqNUpCwCCCCAAAJFE4h2hn3ffffdf//9w8PD4ccrf/njd7/7XZg//lFRUbF58+bnn39+cdPa3sCcfys4/IwoiQACCCCAgHmBsGfYMjLnI1nkRnHZ4paN8UcffXTe4cqJ9QMPPPDFL35Rkn7ezJ63Ne0C8tmTgUewDsy2la3dPhURQAABBBBYaoEIge1ktmyMy1+5lr+sJbEtmf35z3++4BD/9Kc/SVpLVMt5s3w+Gn8Se6kXkvYRQAABBFa2QLTADma2/HGOoaEhyW+J5MrKSie5Jafv3LkjcS4JvXbtWrlxjLRe2b9AzA4BBBBAwIxA5MD298ade9D+/Oc/y2eIyvHpp5/KSw899JB84Ikcn/vc5+Rqt3NiHemBLjPTphcEEEAAAQTiJaAT2H5m+39oRMLb+eBS51ZwJ6T9I14ijBYBBBBAAIFlKKAZ2M5MnM8Gn/kJ4c4pNSfWy3C9GRICCCCAQEwFFhTYwTk7sU1Ix/T3gGEjgAACCCxzgUUL7GU+T4aHAAIIIIBArAXCfnBKrCfJ4BFAAAEEEIi7AIEd9xVk/AgggAACiRAgsBOxzEwSAQQQQCDuAgR23FeQ8SOAAAIIJEKAwE7EMjNJBBBAAIG4CxDYcV9Bxo8AAgggkAgBAjsRy8wkEUAAAQTiLkBgx30FGT8CCCCAQCIECOxELDOTRAABBBCIuwCBHfcVZPwIIIAAAokQILATscxMEgEEEEAg7gIEdtxXkPEjgAACCCRCgMBOxDIzSQQQQACBuAsQ2HFfQcaPAAIIIJAIAQI7EcvMJBFAAAEE4i5AYMd9BRk/AggggEAiBAjsRCwzk0QAAQQQiLsAgR33FWT8CCCAAAKJECCwE7HMTBIBBBBAIO4CBHbcV5DxI4AAAggkQoDATsQyM0kEEEAAgbgLENhxX0HGjwACCCCQCAECOxHLzCQRQAABBOIuQGDHfQUZPwIIIIBAIgRWTU9P601Uu6Jed9RCAAEEEEBgZQisWrVKYyKRA9vPaQJbg5sqCCCAAAII+IEdKbmjBbYT0vKv/4XzLfoIIIAAAgggMLeAE8/+v8Fvw9BFCOxgWk9NTTmxnZfWhHcYdMoggAACCCREIO8cWr51jpKSEucLP8LnBQkb2H5aO1H9/wb/9KP/+/GFG3/69B6n1/MiUwABBBBAAAEl8NB9q3Z85fP/9d89/K+rP+/HdsjMjhDYzvm0BHb65sR//MltoprfPgQQQAABBDQEJLb/1395NLWuzD/PDnMxO8JjXU5a37t370f/52PSWmOFqIIAAggggIAISIZKkkqeOpvWIU1CBbZ/rdoJ7Iu//TRk6xRDAAEEEEAAgZkCkqROYMtLM28IKygWKrCdmk6Ln3322V+4bs1vHwIIIIAAAgsQkCSVPA0Z1U4/EQJbSst7gcnJyQWMkKoIIIAAAgggoAQkT50z7JBHhMAOPnsdsnWKIYAAAggggEBBgaipGiGwnf7CXx5nhRBAAAEEEEBgNoGoeRo5sKFHAAEEEEAAAfMC0QI76tsB8/OhRwQQQAABBOIiEClVowV2XAgYJwIIIIAAAitMgMBeYQvKdBBAAAEEVqYAgb0y15VZIYAAAgisMIFQnyXuPNktT4z99a9/nZiYSP2P4RWmwHQQWL4CL3zt99980Bve5IWf/fOL/+R8V/XmD9bu+Fz+wH/zi6v/9i354WP/2Fr5+MidL//DLb/E3j1/+/0v//mHP/htm2Wpr79SmlM5t/DyBWFkCKwUgfR/W1NWVvbAAw+Ulpb6f7lrjslxhr1SVp55rEgBldbWT1uuftn5v1/c2/EfNv/jC9mpSjy7L3ll7LT2jtWVwcL5QpLQfsstQxfKKn//3x9bkYpMCoGVIUBgr4x1ZBYrU+Do3zxojfzpgD+5t3790xHr8b8JGauTvxmZfPybXzsaymb0xR/c+c3cAR+qHQohgMBSCRDYSyVLuwgsXOA345PW6vI3/022pQP/cDW4yz13Fx/1DF/484P/Kex5861fjFhfqqxa+LBpAQEElkKAwF4KVdpEYHEE2k7/809HSmUb/Pet9v/NiN7Hv+m95BRozTufHn3xf0+Mhz5vlvcH5eUPLc7QaQUBBBZbgMBebFHaQ2BRBdQptbrSPHThz5a1ulJSec5r2L/O7p87w/in3x6/EX5jfFGHTmMIILCoAgT2onLSGAJLJSDXmFVy/1DS9xsb9kbppe102I3xx8tLx8f5a/dRcCmLgEEBAtsgNl0hEE1AHs3KOZ+W2m137lmfu//xaO24G+P7vzx3tce+udr66M5otLYpjQACpgQIbFPS9INAZIFbP1W72X8buOms6s1vPDh+4w/5+97ztmxvjJd/LvfB65xa8lS3em4756mweZulAAIIGBTgg1MMYtMVAhoCOR+cYnmfiyINFf7gFMv9/BM5Oy//KPspK155a2K2D04ZvzG08TSn1xorRBUENAWifnAKga0JTTUEEEAAAQQWIhA1sNkSX4g2dRFAAAEEEDAkQGAbgqYbBBBAAAEEFiJAYC9Ej7oIIIAAAggYEiCwDUHTDQIIIIAAAgsRILAXokddBBBAAAEEDAkQ2Iag6QYBBBBAAIGFCEQLbPkL2wvpjLoIIIAAAggg4AtEStVogY0yAggggAACCBRFIHJgR3o7UJQp0SkCCCCAAALLXyBqnkYIbL/pB+f4QOLlL8QIEUAAAQQQKLaAn6ThYztCYMvspF05vvlotFrFZqF/BBBAAAEElpeAJKkTqeGHFSF6naZLS0v/8zcfeICT7PDGlEQAAQQQQCAgIBkqSSp5GimzQwW232JJScl99923+csPHX1m+l9VfnJ/yRRLgAACCCCAAAIhBSQ3JT0lQyVJJU8lVf3d63lbCPXXuqSVafuYmpr67LPPPvnkk7t373700UcjIyPyrfxw3m4ogAACCCCAQMIFJJ7vv//+1atXf+lLX/riF7/4hS98Qb6VH4Y8z44Q2E5s37t3T0L6008/ldj+y1/+It86P0/4MjB9BBBAAAEE5hBwLlfLWfWDDz4oUf3QQw9JWsu3zs/DXMwOG9h+Kks2T05OSk7LIV/knV6T3Py+IoAAAggg4AvkJbGcT8ula8lpOZxr2CHTWhWLFLFOYWdvXL5w/o3UAquIAAIIIIBAMgWceHauWzs74eHTOnJgB+OZnE7mLxyzRgABBBBYoIB/2h1mJzx7sq6du9oVFzhPqiOAAAIIIBBrgUg5vQiBHWssBo8AAggggEC8BEI9hx2vKTFaBBBAAAEEVp7A/wcnQWypKWY70gAAAABJRU5ErkJggg==)

#### Import useFormik and create initial values

- Open the Contact.js file, import useFormik and write codes as follow:

```
…
import { useFormik } from 'formik';
…
const formik = useFormik({
    initialValues:{
        name:"",
        email:"",
        phone:"",
        program:0,
        message:"",
        agree:false
},
});
```

#### Update the initial values and get the values of controls (textbox, select,…)

```
<form onSubmit={formik.handleSubmit}>
 <TextField
               label="Name"
              name="name"
             value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
 label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
             <TextField
              label="phone"
              name="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <FormControl sx={{ m: 1, minWidth: 600 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Program of Study</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          label="Program of Stydy"
          name="program"
          value={formik.values.program}
           onChange={formik.handleChange}
        >
            <MenuItem value={0}>
            <em>Please select</em>
          </MenuItem>
          <MenuItem value={1}>Software Engineering</MenuItem>
          <MenuItem value={2}>Information System</MenuItem>
          <MenuItem value={3}>Information Assurance</MenuItem>
          <MenuItem value={4}>Internet of Things</MenuItem>
          <MenuItem value={5}>Artificial Intelligence</MenuItem>
          <MenuItem value={6}>Digital Art & Design</MenuItem>
        </Select>
      </FormControl>
      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          name='message'
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <FormControlLabel control={<Switch/>} label="Agree to terms and conditions." name='agree'
 value={formik.values.agree} onClick={formik.handleChange}  />
            <Button
            type='submit'>
             Send
            </Button>
</form>
```

**Validate to form values by Yup**

- Next, we need to import the Yup to validate the values of form.
- Write codes as follow:

```
….
import * as Yup from 'yup';
…
const formik = useFormik({
    initialValues:{
        name:"",
        email:"",
        phone:"",
        program:0,
        message:"",
        agree:false
    },
    onSubmit: (values)=>{

    },
    validationSchema: Yup.object({
        name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
        email: Yup.string().required("Required.").email("Invalid email"),
        phone: Yup.number().integer().typeError("Please enter a valid number"),
        program: Yup.number().integer().typeError("Please select a program."),
        message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
        agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
    }),

   });
```

#### Show the errors of control values

- Update codes as follow:

```
. . .
<Textfield
name="name"
. . .
/>
{formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
<Textfield
name="email"
. . .
/>
{formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
<Textfield
name="phone"
. . .
/>
{formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
<select
name="program"
>
. . .
</select>
{formik.errors.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}
 <TextField
name='message'
...
/>
        {formik.errors.message && (<Typography variant="caption" color="red">{formik.errors.message}</Typography>)}
    <FormControlLabel control={<Switch/>} label="Agree to terms and conditions." name='agree' value={formik.values.agree} onClick={formik.handleChange}/>
        {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
```

- Submit form when all data had validated:

```
   onSubmit: (values)=>{alert(JSON.stringify(formik.values))},
//Convert to JSON string and show in alert box.
```

#### Run your React app and see the result

#### Conclusions

In this Lab you learnt to use Formik and Yup in React application.